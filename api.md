# Triggers

Types:

- <code><a href="./src/resources/triggers.ts">Trigger</a></code>
- <code><a href="./src/resources/triggers.ts">TriggerList</a></code>
- <code><a href="./src/resources/triggers.ts">TriggerTriggerWebhookResponse</a></code>

Methods:

- <code title="post /v1/gateway/triggers">client.triggers.<a href="./src/resources/triggers.ts">create</a>({ ...params }) -> Trigger</code>
- <code title="get /v1/gateway/triggers/{triggerId}">client.triggers.<a href="./src/resources/triggers.ts">retrieve</a>(triggerID) -> Trigger</code>
- <code title="patch /v1/gateway/triggers/{triggerId}">client.triggers.<a href="./src/resources/triggers.ts">update</a>(triggerID, { ...params }) -> Trigger</code>
- <code title="get /v1/gateway/triggers">client.triggers.<a href="./src/resources/triggers.ts">list</a>({ ...params }) -> TriggersPageBased</code>
- <code title="delete /v1/gateway/triggers/{triggerId}">client.triggers.<a href="./src/resources/triggers.ts">delete</a>(triggerID) -> void</code>
- <code title="get /v1/gateway/triggers/workflow-version/{workflowVersionId}">client.triggers.<a href="./src/resources/triggers.ts">listByWorkflowVersion</a>(workflowVersionID, { ...params }) -> TriggersPageBased</code>
- <code title="post /v1/gateway/triggers/resume">client.triggers.<a href="./src/resources/triggers.ts">resumeExecution</a>({ ...params }) -> void</code>
- <code title="post /v1/gateway/triggers/{triggerId}/webhook">client.triggers.<a href="./src/resources/triggers.ts">triggerWebhook</a>(triggerID, { ...params }) -> TriggerTriggerWebhookResponse</code>

# SubTenants

Types:

- <code><a href="./src/resources/sub-tenants.ts">SubTenant</a></code>
- <code><a href="./src/resources/sub-tenants.ts">SubTenantListCombinedResponse</a></code>

Methods:

- <code title="post /v1/gateway/sub-tenants">client.subTenants.<a href="./src/resources/sub-tenants.ts">create</a>({ ...params }) -> SubTenant</code>
- <code title="get /v1/gateway/sub-tenants/{id}">client.subTenants.<a href="./src/resources/sub-tenants.ts">retrieve</a>(id) -> SubTenant</code>
- <code title="patch /v1/gateway/sub-tenants/{id}">client.subTenants.<a href="./src/resources/sub-tenants.ts">update</a>(id, { ...params }) -> SubTenant</code>
- <code title="get /v1/gateway/sub-tenants">client.subTenants.<a href="./src/resources/sub-tenants.ts">list</a>({ ...params }) -> SubTenantsPageBased</code>
- <code title="delete /v1/gateway/sub-tenants/{id}">client.subTenants.<a href="./src/resources/sub-tenants.ts">delete</a>(id) -> void</code>
- <code title="get /v1/gateway/sub-tenants/combined">client.subTenants.<a href="./src/resources/sub-tenants.ts">listCombined</a>({ ...params }) -> SubTenantListCombinedResponsesPageBased</code>
- <code title="get /v1/gateway/sub-tenants/by-id/{subTenantId}">client.subTenants.<a href="./src/resources/sub-tenants.ts">retrieveByID</a>(subTenantID) -> SubTenant</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">Workflow</a></code>

Methods:

- <code title="get /v1/gateway/workflows/{workflowId}">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieve</a>(workflowID) -> Workflow</code>
- <code title="get /v1/gateway/workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> WorkflowsPageBased</code>

## Versions

Types:

- <code><a href="./src/resources/workflows/versions.ts">WorkflowVersion</a></code>
- <code><a href="./src/resources/workflows/versions.ts">WorkflowVersionList</a></code>
- <code><a href="./src/resources/workflows/versions.ts">VersionPublishResponse</a></code>

Methods:

- <code title="post /v1/gateway/workflow-versions">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">create</a>({ ...params }) -> WorkflowVersion</code>
- <code title="patch /v1/gateway/workflow-versions/{versionId}">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">update</a>(versionID, { ...params }) -> WorkflowVersion</code>
- <code title="delete /v1/gateway/workflow-versions/{versionId}">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">delete</a>(versionID) -> void</code>
- <code title="get /v1/gateway/workflows/{workflowId}/versions">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">list0</a>(workflowID, { ...params }) -> WorkflowVersionsPageBased</code>
- <code title="get /v1/gateway/workflow-versions">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">list1</a>({ ...params }) -> WorkflowVersionsPageBased</code>
- <code title="post /v1/gateway/workflow-versions/{versionId}/publish">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">publish</a>(versionID) -> VersionPublishResponse</code>
- <code title="get /v1/gateway/workflows/versions/{versionId}">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">retrieve0</a>(versionID) -> WorkflowVersion</code>
- <code title="get /v1/gateway/workflow-versions/{versionId}">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">retrieve1</a>(versionID) -> WorkflowVersion</code>
