// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PageBased, type PageBasedParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
  list(
    query: TriggerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TriggersPageBased, Trigger> {
    return this._client.getAPIList('/v1/gateway/triggers', PageBased<Trigger>, { query, ...options });
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
   * Intelligently resumes paused executions for the same entityId and event, or
   * triggers new workflows if no paused executions exist. This endpoint simplifies
   * integration by automatically handling the decision between resuming and
   * triggering.
   */
  ingest(body: TriggerIngestParams, options?: RequestOptions): APIPromise<TriggerIngestResponse> {
    return this._client.post('/v1/gateway/triggers/ingest', { body, ...options });
  }

  /**
   * Retrieves a paginated list of triggers for a specific workflow version. Accepts
   * both public and secret keys.
   */
  listByWorkflowVersion(
    workflowVersionID: string,
    query: TriggerListByWorkflowVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TriggersPageBased, Trigger> {
    return this._client.getAPIList(
      path`/v1/gateway/triggers/workflow-version/${workflowVersionID}`,
      PageBased<Trigger>,
      { query, ...options },
    );
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
   * Finds and triggers all active webhook triggers matching the specified event and
   * subTenantId (if provided). This is a helper endpoint to facilitate workflow
   * initiation by event name instead of trigger ID.
   */
  triggerByEvent(
    body: TriggerTriggerByEventParams,
    options?: RequestOptions,
  ): APIPromise<TriggerTriggerByEventResponse> {
    return this._client.post('/v1/gateway/triggers/webhook/by-event', { body, ...options });
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

export type TriggersPageBased = PageBased<Trigger>;

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
  type: 'schedule' | 'webhook';

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
   * List of triggers
   */
  data: Array<Trigger>;

  /**
   * Last page number available (zero-based)
   */
  lastPage: number;

  /**
   * Current page number (zero-based)
   */
  page: number;
}

export interface TriggerIngestResponse {
  /**
   * List of resumed executions
   */
  resumed: Array<TriggerIngestResponse.Resumed>;

  /**
   * List of skipped executions
   */
  skipped: Array<TriggerIngestResponse.Skipped>;

  /**
   * List of newly triggered workflows
   */
  triggered: Array<TriggerIngestResponse.Triggered>;
}

export namespace TriggerIngestResponse {
  export interface Resumed {
    /**
     * Entity ID
     */
    entityId: string;

    /**
     * Run identifier that was resumed
     */
    runId: string;

    /**
     * Workflow version identifier
     */
    workflowVersionId: string;
  }

  export interface Skipped {
    /**
     * Reason why the execution was skipped
     */
    reason: 'expired' | 'not_paused' | 'wrong_event' | 'filtered_out';

    /**
     * Run identifier (if applicable)
     */
    runId?: string;
  }

  export interface Triggered {
    /**
     * Deduplication key
     */
    dedupeKey: string;

    /**
     * Trigger identifier
     */
    triggerId: string;

    /**
     * Run identifier (if workflow was started)
     */
    runId?: string;
  }
}

export interface TriggerTriggerByEventResponse {
  /**
   * Total number of triggers found and triggered
   */
  total: number;

  /**
   * List of triggered webhook triggers
   */
  triggers: Array<TriggerTriggerByEventResponse.Trigger>;
}

export namespace TriggerTriggerByEventResponse {
  export interface Trigger {
    /**
     * Deduplication key
     */
    dedupeKey: string;

    /**
     * Trigger identifier
     */
    triggerId: string;
  }
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

  type: 'schedule' | 'webhook';

  workflowVersionId: string;
}

export namespace TriggerCreateParams {
  export interface Config {
    rateLimit?: Config.RateLimit;

    retryPolicy?: Config.RetryPolicy;

    scheduleConfig?: Config.ScheduleConfig;

    timeoutMs?: number;

    webhookConfig?: Config.WebhookConfig | null;
  }

  export namespace Config {
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

    export interface WebhookConfig {
      event?: string;
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
    rateLimit?: Config.RateLimit;

    retryPolicy?: Config.RetryPolicy;

    scheduleConfig?: Config.ScheduleConfig;

    timeoutMs?: number;

    webhookConfig?: Config.WebhookConfig | null;
  }

  export namespace Config {
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

    export interface WebhookConfig {
      event?: string;
    }
  }
}

export interface TriggerListParams extends PageBasedParams {
  /**
   * Whether the triggers should be active
   */
  isActive?: boolean;

  /**
   * Search term to filter triggers
   */
  search?: string;

  /**
   * Type of the triggers to return
   */
  type?: 'schedule' | 'webhook';

  /**
   * Workflow version identifier
   */
  workflowVersionId?: string;
}

export interface TriggerIngestParams {
  event: string;

  eventData?: { [key: string]: unknown };

  resumeOptions?: TriggerIngestParams.ResumeOptions;

  subTenantId?: string;
}

export namespace TriggerIngestParams {
  export interface ResumeOptions {
    resumeAll?: boolean;

    runIds?: Array<string>;

    workflowVersionIds?: Array<string>;
  }
}

export interface TriggerListByWorkflowVersionParams extends PageBasedParams {}

export interface TriggerResumeExecutionParams {
  resumeToken: string;

  runId: string;

  input?: unknown;
}

export interface TriggerTriggerByEventParams {
  event: string;

  eventData?: { [key: string]: unknown };

  subTenantId?: string;
}

export interface TriggerTriggerWebhookParams {
  eventData?: { [key: string]: unknown };
}

export declare namespace Triggers {
  export {
    type Trigger as Trigger,
    type TriggerList as TriggerList,
    type TriggerIngestResponse as TriggerIngestResponse,
    type TriggerTriggerByEventResponse as TriggerTriggerByEventResponse,
    type TriggerTriggerWebhookResponse as TriggerTriggerWebhookResponse,
    type TriggersPageBased as TriggersPageBased,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerListParams as TriggerListParams,
    type TriggerIngestParams as TriggerIngestParams,
    type TriggerListByWorkflowVersionParams as TriggerListByWorkflowVersionParams,
    type TriggerResumeExecutionParams as TriggerResumeExecutionParams,
    type TriggerTriggerByEventParams as TriggerTriggerByEventParams,
    type TriggerTriggerWebhookParams as TriggerTriggerWebhookParams,
  };
}
