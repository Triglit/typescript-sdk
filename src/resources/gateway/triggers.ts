// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Triggers extends APIResource {
  /**
   * Creates a new trigger for a workflow version. Requires secret key
   * authentication.
   */
  create(body: TriggerCreateParams, options?: RequestOptions): APIPromise<Trigger> {
    return this._client.post('/v1/gateway/triggers', { body, ...options });
  }

  /**
   * Retrieves a specific trigger by its ID. Accepts both public and secret keys.
   */
  retrieve(triggerID: string, options?: RequestOptions): APIPromise<Trigger> {
    return this._client.get(path`/v1/gateway/triggers/${triggerID}`, options);
  }

  /**
   * Updates an existing trigger. Requires secret key authentication.
   */
  update(triggerID: string, body: TriggerUpdateParams, options?: RequestOptions): APIPromise<Trigger> {
    return this._client.patch(path`/v1/gateway/triggers/${triggerID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of triggers for the tenant. Accepts both public and
   * secret keys.
   */
  list(query: TriggerListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TriggerList> {
    return this._client.get('/v1/gateway/triggers', { query, ...options });
  }

  /**
   * Deletes a trigger. Requires secret key authentication.
   */
  delete(triggerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gateway/triggers/${triggerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all triggers for a specific workflow version. Accepts both public and
   * secret keys.
   */
  listByWorkflowVersion(workflowVersionID: string, options?: RequestOptions): APIPromise<TriggerList> {
    return this._client.get(path`/v1/gateway/triggers/workflow-version/${workflowVersionID}`, options);
  }

  /**
   * Resumes a paused workflow execution with input data. Requires secret key
   * authentication.
   */
  resumeExecution(body: TriggerResumeExecutionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/gateway/triggers/resume', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Triggers a webhook trigger with event data.
   */
  triggerWebhook(
    triggerID: string,
    body: TriggerTriggerWebhookParams,
    options?: RequestOptions,
  ): APIPromise<TriggerTriggerWebhookResponse> {
    return this._client.post(path`/v1/gateway/triggers/${triggerID}/webhook`, { body, ...options });
  }
}

export interface Trigger {
  /**
   * Unique trigger identifier
   */
  id: string;

  /**
   * Trigger configuration
   */
  config: { [key: string]: unknown };

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Whether the trigger is active
   */
  isActive: boolean;

  /**
   * Trigger name
   */
  name: string;

  /**
   * Tenant identifier
   */
  tenantId: string;

  /**
   * Trigger type
   */
  type: 'event' | 'schedule' | 'webhook' | 'queue';

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Workflow version identifier
   */
  workflowVersionId: string;

  /**
   * Sub-tenant identifier
   */
  subTenantId?: string;
}

export interface TriggerList {
  /**
   * Number of items per page
   */
  limit: number;

  /**
   * Current page offset
   */
  offset: number;

  /**
   * Total number of triggers
   */
  total: number;

  /**
   * List of triggers
   */
  triggers: Array<Trigger>;
}

export interface TriggerTriggerWebhookResponse {
  /**
   * Deduplication key
   */
  dedupeKey: string;
}

export interface TriggerCreateParams {
  config: TriggerCreateParams.Config;

  name: string;

  type: 'event' | 'schedule' | 'webhook' | 'queue';

  workflowVersionId: string;
}

export namespace TriggerCreateParams {
  export interface Config {
    entityIdResolver?: string;

    eventKeyGenerator?: string;

    filters?: { [key: string]: unknown };

    queueConfig?: Config.QueueConfig;

    rateLimit?: Config.RateLimit;

    retryPolicy?: Config.RetryPolicy;

    scheduleConfig?: Config.ScheduleConfig;

    timeoutMs?: number;

    webhookConfig?: unknown | null;
  }

  export namespace Config {
    export interface QueueConfig {
      queueName: string;

      batchSize?: number;

      consumerGroup?: string;
    }

    export interface RateLimit {
      maxRequests: number;

      windowMs: number;
    }

    export interface RetryPolicy {
      backoffMs: number;

      maxBackoffMs: number;

      maxRetries: number;
    }

    export interface ScheduleConfig {
      cron?: string;

      intervalMs?: number;

      timezone?: string;
    }
  }
}

export interface TriggerUpdateParams {
  config?: TriggerUpdateParams.Config;

  isActive?: boolean;

  name?: string;
}

export namespace TriggerUpdateParams {
  export interface Config {
    entityIdResolver?: string;

    eventKeyGenerator?: string;

    filters?: { [key: string]: unknown };

    queueConfig?: Config.QueueConfig;

    rateLimit?: Config.RateLimit;

    retryPolicy?: Config.RetryPolicy;

    scheduleConfig?: Config.ScheduleConfig;

    timeoutMs?: number;

    webhookConfig?: unknown | null;
  }

  export namespace Config {
    export interface QueueConfig {
      queueName: string;

      batchSize?: number;

      consumerGroup?: string;
    }

    export interface RateLimit {
      maxRequests: number;

      windowMs: number;
    }

    export interface RetryPolicy {
      backoffMs: number;

      maxBackoffMs: number;

      maxRetries: number;
    }

    export interface ScheduleConfig {
      cron?: string;

      intervalMs?: number;

      timezone?: string;
    }
  }
}

export interface TriggerListParams {
  /**
   * Whether the triggers should be active
   */
  isActive?: boolean;

  /**
   * Number of triggers to return
   */
  limit?: number;

  /**
   * Offset of the triggers to return
   */
  offset?: number;

  /**
   * Search term to filter triggers
   */
  search?: unknown;

  /**
   * Type of the triggers to return
   */
  type?: 'event' | 'schedule' | 'webhook' | 'queue';

  /**
   * Workflow version identifier
   */
  workflowVersionId?: unknown;
}

export interface TriggerResumeExecutionParams {
  resumeToken: string;

  runId: string;

  input?: unknown;
}

export interface TriggerTriggerWebhookParams {
  eventData?: { [key: string]: unknown };

  headers?: { [key: string]: string };

  query?: { [key: string]: string };
}

export declare namespace Triggers {
  export {
    type Trigger as Trigger,
    type TriggerList as TriggerList,
    type TriggerTriggerWebhookResponse as TriggerTriggerWebhookResponse,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerListParams as TriggerListParams,
    type TriggerResumeExecutionParams as TriggerResumeExecutionParams,
    type TriggerTriggerWebhookParams as TriggerTriggerWebhookParams,
  };
}
