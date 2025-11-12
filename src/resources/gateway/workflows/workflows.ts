// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VersionsAPI from './versions';
import {
  VersionCreateParams,
  VersionList0Params,
  VersionList1Params,
  VersionPublishResponse,
  VersionUpdateParams,
  Versions,
  WorkflowVersion,
  WorkflowVersionList,
} from './versions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workflows extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Retrieves a specific workflow by its ID. Accepts both public and secret keys.
   */
  retrieve(workflowID: string, options?: RequestOptions): APIPromise<Workflow> {
    return this._client.get(path`/v1/gateway/workflows/${workflowID}`, options);
  }

  /**
   * Retrieves a paginated list of workflows for the tenant. Accepts both public and
   * secret keys.
   */
  list(
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowListResponse> {
    return this._client.get('/v1/gateway/workflows', { query, ...options });
  }
}

export interface Workflow {
  /**
   * Unique workflow identifier
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Whether the workflow is active
   */
  isActive: boolean;

  /**
   * Workflow name
   */
  name: string;

  /**
   * Tenant identifier
   */
  tenantId: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Workflow description
   */
  description?: string;

  /**
   * Sub-tenant identifier
   */
  subTenantId?: string;
}

export interface WorkflowListResponse {
  /**
   * Number of items per page
   */
  limit: number;

  /**
   * Current page offset
   */
  offset: number;

  /**
   * Total number of workflows
   */
  total: number;

  /**
   * List of workflows
   */
  workflows: Array<Workflow>;
}

export interface WorkflowListParams {
  /**
   * Whether the workflows should be active
   */
  isActive?: boolean;

  /**
   * Number of workflows to return
   */
  limit?: number;

  /**
   * Page number (0-indexed)
   */
  page?: number;

  /**
   * Search term to filter workflows
   */
  search?: unknown;

  /**
   * Sub-tenant identifier
   */
  subTenantId?: string;
}

Workflows.Versions = Versions;

export declare namespace Workflows {
  export {
    type Workflow as Workflow,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowListParams as WorkflowListParams,
  };

  export {
    Versions as Versions,
    type WorkflowVersion as WorkflowVersion,
    type WorkflowVersionList as WorkflowVersionList,
    type VersionPublishResponse as VersionPublishResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionList0Params as VersionList0Params,
    type VersionList1Params as VersionList1Params,
  };
}
