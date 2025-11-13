// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubTenantsAPI from './sub-tenants';
import {
  SubTenant,
  SubTenantCreateParams,
  SubTenantListCombinedParams,
  SubTenantListCombinedResponse,
  SubTenantListCombinedResponsesPageBased,
  SubTenantListParams,
  SubTenantUpdateParams,
  SubTenants,
  SubTenantsPageBased,
} from './sub-tenants';
import * as TriggersAPI from './triggers';
import {
  Trigger,
  TriggerCreateParams,
  TriggerList,
  TriggerListByWorkflowVersionParams,
  TriggerListParams,
  TriggerResumeExecutionParams,
  TriggerTriggerWebhookParams,
  TriggerTriggerWebhookResponse,
  TriggerUpdateParams,
  Triggers,
  TriggersPageBased,
} from './triggers';
import * as WorkflowsAPI from './workflows/workflows';
import { Workflow, WorkflowListParams, Workflows, WorkflowsPageBased } from './workflows/workflows';

export class Gateway extends APIResource {
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);
  subTenants: SubTenantsAPI.SubTenants = new SubTenantsAPI.SubTenants(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);
}

Gateway.Triggers = Triggers;
Gateway.SubTenants = SubTenants;
Gateway.Workflows = Workflows;

export declare namespace Gateway {
  export {
    Triggers as Triggers,
    type Trigger as Trigger,
    type TriggerList as TriggerList,
    type TriggerTriggerWebhookResponse as TriggerTriggerWebhookResponse,
    type TriggersPageBased as TriggersPageBased,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerListParams as TriggerListParams,
    type TriggerListByWorkflowVersionParams as TriggerListByWorkflowVersionParams,
    type TriggerResumeExecutionParams as TriggerResumeExecutionParams,
    type TriggerTriggerWebhookParams as TriggerTriggerWebhookParams,
  };

  export {
    SubTenants as SubTenants,
    type SubTenant as SubTenant,
    type SubTenantListCombinedResponse as SubTenantListCombinedResponse,
    type SubTenantsPageBased as SubTenantsPageBased,
    type SubTenantListCombinedResponsesPageBased as SubTenantListCombinedResponsesPageBased,
    type SubTenantCreateParams as SubTenantCreateParams,
    type SubTenantUpdateParams as SubTenantUpdateParams,
    type SubTenantListParams as SubTenantListParams,
    type SubTenantListCombinedParams as SubTenantListCombinedParams,
  };

  export {
    Workflows as Workflows,
    type Workflow as Workflow,
    type WorkflowsPageBased as WorkflowsPageBased,
    type WorkflowListParams as WorkflowListParams,
  };
}
