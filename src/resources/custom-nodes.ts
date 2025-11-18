// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIPromise } from '../core/api-promise';
import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';

export class CustomNodes extends APIResource {
	/**
	 * Retrieves a complete registry of all available nodes (built-in + custom) for the
	 * tenant.
	 */
	retrieveRegistry(options?: RequestOptions): APIPromise<CustomNodeRetrieveRegistryResponse> {
		return this._client.get('/v1/gateway/custom-nodes/registry', options);
	}

	/**
	 * Validates the signature of a CNP payload using a timing-safe string comparison.
	 */
	async validateCNPSignature(payload: string, signature: string, cnpSecret: string): Promise<boolean> {
		const crypto = await import('node:crypto');

		const timingSafeEqual = (a: string, b: string): boolean => {
			const bufA = Buffer.from(a);
			const bufB = Buffer.from(b);
			if (bufA.length !== bufB.length) return false;
			return crypto.timingSafeEqual(bufA, bufB);
		};

		const hmac = crypto.createHmac('sha256', cnpSecret);
		hmac.update(payload);
		const expectedSignature = `sha256=${hmac.digest('base64')}`;
		return typeof signature === 'string' && timingSafeEqual(signature, expectedSignature);
	}
}

export interface CustomNodeRetrieveRegistryResponse {
	/**
	 * Array of available nodes (built-in + custom)
	 */
	nodes: Array<CustomNodeRetrieveRegistryResponse.Node>;

	/**
	 * Total count of available nodes
	 */
	total: number;
}

export namespace CustomNodeRetrieveRegistryResponse {
	export interface Node {
		/**
		 * Whether the node can pause workflow execution (e.g., waiting for user input)
		 */
		canPause: boolean;

		/**
		 * Configuration schema defining node settings with complete type specifications.
		 * Each key is a config field name, and the value is a NodeFieldSchemaDto with full
		 * type definition including nested objects, arrays, and validation rules.
		 */
		configSchema: { [key: string]: unknown };

		/**
		 * Input schema defining expected input fields with complete type specifications.
		 * Each key is a field name, and the value is a NodeFieldSchemaDto with full type
		 * definition including nested objects and arrays.
		 */
		inputSchema: { [key: string]: unknown };

		/**
		 * Whether this is a built-in node (true) or a custom node (false)
		 */
		isBuiltIn: boolean;

		/**
		 * Human-readable node name displayed in UI
		 */
		name: string;

		/**
		 * Output schema defining fields that will be produced by the node with complete
		 * type specifications. Each key is a field name, and the value is a
		 * NodeFieldSchemaDto with full type definition.
		 */
		outputSchema: { [key: string]: unknown };

		/**
		 * Unique node type identifier (e.g., 'input', 'transform', 'custom-api-call')
		 */
		type: string;

		/**
		 * Node version following semantic versioning (semver)
		 */
		version: string;

		/**
		 * Detailed description of what the node does
		 */
		description?: string;
	}
}

export declare namespace CustomNodes {
	export { type CustomNodeRetrieveRegistryResponse as CustomNodeRetrieveRegistryResponse };
}

export type CNPRequestBody<Inputs extends Record<string, unknown>, Config extends Record<string, unknown>> =
	| { type: 'heartbeat'; tenantId: string; timestamp: string }
	| {
			type: 'run';
			payload: {
				nodeType: string;
				runId: string;
				tenantId: string;
				subTenantId?: string;
				entityId: string;
				inputs: Inputs;
				config: Config;
				metadata: {
					timestamp: string;
					version: string;
				};
			};
	  };
