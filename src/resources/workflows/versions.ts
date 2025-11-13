// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PageBased, type PageBasedParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Creates a new version of an existing workflow. Accepts both public and secret
   * keys.
   */
  create(body: VersionCreateParams, options?: RequestOptions): APIPromise<WorkflowVersion> {
    return this._client.post('/v1/gateway/workflow-versions', { body, ...options });
  }

  /**
   * Updates an existing workflow version. Accepts both public and secret keys.
   */
  update(
    versionID: string,
    body: VersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowVersion> {
    return this._client.patch(path`/v1/gateway/workflow-versions/${versionID}`, { body, ...options });
  }

  /**
   * Deletes a workflow version. Accepts both public and secret keys.
   */
  delete(versionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gateway/workflow-versions/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all versions of a specific workflow. Accepts both public and secret
   * keys.
   */
  list0(
    workflowID: string,
    query: VersionList0Params | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkflowVersionsPageBased, WorkflowVersion> {
    return this._client.getAPIList(
      path`/v1/gateway/workflows/${workflowID}/versions`,
      PageBased<WorkflowVersion>,
      { query, ...options },
    );
  }

  /**
   * Retrieves a paginated list of workflow versions for a specific workflow. Accepts
   * both public and secret keys.
   */
  list1(
    query: VersionList1Params,
    options?: RequestOptions,
  ): PagePromise<WorkflowVersionsPageBased, WorkflowVersion> {
    return this._client.getAPIList('/v1/gateway/workflow-versions', PageBased<WorkflowVersion>, {
      query,
      ...options,
    });
  }

  /**
   * Publishes a workflow version, making it active. Accepts both public and secret
   * keys.
   */
  publish(versionID: string, options?: RequestOptions): APIPromise<VersionPublishResponse> {
    return this._client.post(path`/v1/gateway/workflow-versions/${versionID}/publish`, options);
  }

  /**
   * Retrieves a specific workflow version by its ID. Accepts both public and secret
   * keys.
   */
  retrieve0(versionID: string, options?: RequestOptions): APIPromise<WorkflowVersion> {
    return this._client.get(path`/v1/gateway/workflows/versions/${versionID}`, options);
  }

  /**
   * Retrieves a specific workflow version by its ID. Accepts both public and secret
   * keys.
   */
  retrieve1(versionID: string, options?: RequestOptions): APIPromise<WorkflowVersion> {
    return this._client.get(path`/v1/gateway/workflow-versions/${versionID}`, options);
  }
}

export type WorkflowVersionsPageBased = PageBased<WorkflowVersion>;

export interface WorkflowVersion {
  /**
   * Unique workflow version identifier
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Workflow edges
   */
  edges: Array<WorkflowVersion.Edge>;

  /**
   * Whether this version is active
   */
  isActive: boolean;

  /**
   * Workflow nodes
   */
  nodes: Array<WorkflowVersion.Node>;

  /**
   * Tenant identifier
   */
  tenantId: string;

  /**
   * Version number
   */
  version: number;

  /**
   * Parent workflow identifier
   */
  workflowId: string;

  /**
   * Publication timestamp
   */
  publishedAt?: string;

  /**
   * Sub-tenant identifier
   */
  subTenantId?: string;
}

export namespace WorkflowVersion {
  export interface Edge {
    /**
     * Unique edge identifier
     */
    id: string;

    /**
     * Source node identifier
     */
    sourceNodeId: string;

    /**
     * Target node identifier
     */
    targetNodeId: string;

    /**
     * Conditional expression for edge execution
     */
    condition?: string;

    /**
     * Edge label for display purposes
     */
    label?: string;

    /**
     * Output key from source node
     */
    sourceOutputKey?: string;

    /**
     * Input key of target node
     */
    targetInputKey?: string;
  }

  export interface Node {
    /**
     * Unique node identifier
     */
    id: string;

    /**
     * Whether this node can be paused during execution
     */
    canPause: boolean;

    /**
     * Node configuration object
     */
    config: { [key: string]: unknown };

    /**
     * Node input schema validation
     */
    inputSchema: { [key: string]: unknown };

    /**
     * Node display name
     */
    name: string;

    /**
     * Node output schema definition
     */
    outputSchema: { [key: string]: unknown };

    /**
     * Node position in the canvas
     */
    position: Node.Position;

    /**
     * Node type
     */
    type: 'trigger' | 'action' | 'decision';

    /**
     * Node version
     */
    version: string;

    /**
     * Node description
     */
    description?: string;
  }

  export namespace Node {
    /**
     * Node position in the canvas
     */
    export interface Position {
      /**
       * X coordinate position
       */
      x: number;

      /**
       * Y coordinate position
       */
      y: number;
    }
  }
}

export interface WorkflowVersionList {
  /**
   * List of workflow versions
   */
  data: Array<WorkflowVersion>;

  /**
   * Last page number available (zero-based)
   */
  lastPage: number;

  /**
   * Current page number (zero-based)
   */
  page: number;
}

export interface VersionPublishResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * Published workflow version
   */
  version: WorkflowVersion;
}

export interface VersionCreateParams {
  edges: Array<VersionCreateParams.Edge>;

  nodes: Array<VersionCreateParams.Node>;

  workflowId: string;
}

export namespace VersionCreateParams {
  export interface Edge {
    sourceNodeId: string;

    targetNodeId: string;

    condition?: string;

    label?: string;

    sourceOutputKey?: string;

    targetInputKey?: string;
  }

  export interface Node {
    id: string;

    config: { [key: string]: unknown };

    inputSchema: { [key: string]: unknown };

    name: string;

    outputSchema: { [key: string]: unknown };

    position: Node.Position;

    type: string;

    version: string;

    description?: string;
  }

  export namespace Node {
    export interface Position {
      x: number;

      y: number;
    }
  }
}

export interface VersionUpdateParams {
  edges?: Array<VersionUpdateParams.Edge>;

  nodes?: Array<VersionUpdateParams.Node>;
}

export namespace VersionUpdateParams {
  export interface Edge {
    sourceNodeId: string;

    targetNodeId: string;

    condition?: string;

    label?: string;

    sourceOutputKey?: string;

    targetInputKey?: string;
  }

  export interface Node {
    id: string;

    config: { [key: string]: unknown };

    inputSchema: { [key: string]: unknown };

    name: string;

    outputSchema: { [key: string]: unknown };

    position: Node.Position;

    type: string;

    version: string;

    description?: string;
  }

  export namespace Node {
    export interface Position {
      x: number;

      y: number;
    }
  }
}

export interface VersionList0Params extends PageBasedParams {
  /**
   * Whether the versions should be active
   */
  isActive?: boolean;
}

export interface VersionList1Params extends PageBasedParams {
  /**
   * Workflow identifier
   */
  workflowId: string;

  /**
   * Filter by active versions
   */
  isActive?: unknown;

  /**
   * Search for versions by name or description
   */
  search?: string;
}

export declare namespace Versions {
  export {
    type WorkflowVersion as WorkflowVersion,
    type WorkflowVersionList as WorkflowVersionList,
    type VersionPublishResponse as VersionPublishResponse,
    type WorkflowVersionsPageBased as WorkflowVersionsPageBased,
    type VersionCreateParams as VersionCreateParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionList0Params as VersionList0Params,
    type VersionList1Params as VersionList1Params,
  };
}
