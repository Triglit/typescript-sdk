// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CustomNodes extends APIResource {
	/**
	 * Retrieves a complete registry of all available nodes (built-in + custom) for the
	 * tenant.
	 */
	retrieveRegistry(options?: RequestOptions): APIPromise<CustomNodeRetrieveRegistryResponse> {
		return this._client.get('/v1/gateway/custom-nodes/registry', options);
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
