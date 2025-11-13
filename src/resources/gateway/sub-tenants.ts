// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PageBased, type PageBasedParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubTenants extends APIResource {
  /**
   * Creates a new registered sub-tenant with a name and optional description. The
   * sub-tenant ID can be provided or will be auto-generated. Requires secret key
   * authentication.
   */
  create(body: SubTenantCreateParams, options?: RequestOptions): APIPromise<SubTenant> {
    return this._client.post('/v1/gateway/sub-tenants', { body, ...options });
  }

  /**
   * Retrieves a single registered sub-tenant by its registration ID. Accepts both
   * public and secret keys.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SubTenant> {
    return this._client.get(path`/v1/gateway/sub-tenants/${id}`, options);
  }

  /**
   * Updates the name and/or description of a registered sub-tenant. Requires secret
   * key authentication.
   */
  update(id: string, body: SubTenantUpdateParams, options?: RequestOptions): APIPromise<SubTenant> {
    return this._client.patch(path`/v1/gateway/sub-tenants/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of registered sub-tenants for the tenant. Accepts
   * both public and secret keys.
   */
  list(
    query: SubTenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubTenantsPageBased, SubTenant> {
    return this._client.getAPIList('/v1/gateway/sub-tenants', PageBased<SubTenant>, { query, ...options });
  }

  /**
   * Deletes a sub-tenant registration. Note: this only removes the registration
   * metadata; the sub-tenant ID remains in runs/workflows as arbitrary. Requires
   * secret key authentication.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gateway/sub-tenants/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a combined paginated list of both registered sub-tenants and arbitrary
   * sub-tenant IDs found in runs. Accepts both public and secret keys.
   */
  listCombined(
    query: SubTenantListCombinedParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubTenantListCombinedResponsesPageBased, SubTenantListCombinedResponse> {
    return this._client.getAPIList(
      '/v1/gateway/sub-tenants/combined',
      PageBased<SubTenantListCombinedResponse>,
      { query, ...options },
    );
  }

  /**
   * Looks up a sub-tenant registration by its actual sub-tenant ID. Returns 404 if
   * not registered (meaning it's arbitrary). Accepts both public and secret keys.
   */
  retrieveByID(subTenantID: string, options?: RequestOptions): APIPromise<SubTenant> {
    return this._client.get(path`/v1/gateway/sub-tenants/by-id/${subTenantID}`, options);
  }
}

export type SubTenantsPageBased = PageBased<SubTenant>;

export type SubTenantListCombinedResponsesPageBased = PageBased<SubTenantListCombinedResponse>;

export interface SubTenant {
  /**
   * Unique registration identifier
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Whether this sub-tenant is registered (always true for this DTO)
   */
  isRegistered: boolean;

  /**
   * Display name for the sub-tenant
   */
  name: string;

  /**
   * The actual sub-tenant identifier used in workflows/runs/metrics
   */
  subTenantId: string;

  /**
   * Tenant identifier
   */
  tenantId: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Optional description
   */
  description?: string;
}

export interface SubTenantListCombinedResponse {
  /**
   * Whether this sub-tenant is registered
   */
  isRegistered: boolean;

  /**
   * The sub-tenant identifier
   */
  subTenantId: string;

  /**
   * Registration ID (only present if registered)
   */
  id?: string;

  /**
   * Creation timestamp (only present if registered)
   */
  createdAt?: string;

  /**
   * Description (only present if registered)
   */
  description?: string;

  /**
   * Display name (only present if registered)
   */
  name?: string;

  /**
   * Last update timestamp (only present if registered)
   */
  updatedAt?: string;
}

export interface SubTenantCreateParams {
  name: string;

  description?: string;

  /**
   * ID do sub-tenant. Se não fornecido, será gerado automaticamente.
   */
  subTenantId?: string;
}

export interface SubTenantUpdateParams {
  description?: string | null;

  name?: string;
}

export interface SubTenantListParams extends PageBasedParams {}

export interface SubTenantListCombinedParams extends PageBasedParams {}

export declare namespace SubTenants {
  export {
    type SubTenant as SubTenant,
    type SubTenantListCombinedResponse as SubTenantListCombinedResponse,
    type SubTenantsPageBased as SubTenantsPageBased,
    type SubTenantListCombinedResponsesPageBased as SubTenantListCombinedResponsesPageBased,
    type SubTenantCreateParams as SubTenantCreateParams,
    type SubTenantUpdateParams as SubTenantUpdateParams,
    type SubTenantListParams as SubTenantListParams,
    type SubTenantListCombinedParams as SubTenantListCombinedParams,
  };
}
