// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  WorkflowVersionsPageBased,
} from './versions';
import { APIPromise } from '../../core/api-promise';
import { PageBased, type PageBasedParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
  ): PagePromise<WorkflowsPageBased, Workflow> {
    return this._client.getAPIList('/v1/gateway/workflows', PageBased<Workflow>, { query, ...options });
  }
}

export type WorkflowsPageBased = PageBased<Workflow>;

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

export interface WorkflowListParams extends PageBasedParams {
  /**
   * Whether the workflows should be active
   */
  isActive?: boolean;

  /**
   * Search term to filter workflows
   */
  search?: string;

  /**
   * Sub-tenant identifier
   */
  subTenantId?: string;
}

Workflows.Versions = Versions;

export declare namespace Workflows {
  export {
    type Workflow as Workflow,
    type WorkflowsPageBased as WorkflowsPageBased,
    type WorkflowListParams as WorkflowListParams,
  };

  export {
    Versions as Versions,
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
