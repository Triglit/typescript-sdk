// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Triglit from 'triglit';

const client = new Triglit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource triggers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.triggers.create({
      config: {},
      name: 'x',
      type: 'event',
      workflowVersionId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.triggers.create({
      config: {
        entityIdResolver: 'entityIdResolver',
        eventKeyGenerator: 'eventKeyGenerator',
        filters: { foo: 'bar' },
        queueConfig: { queueName: 'x', batchSize: 1, consumerGroup: 'consumerGroup' },
        rateLimit: { maxRequests: 1, windowMs: 1000 },
        retryPolicy: { backoffMs: 100, maxBackoffMs: 1000, maxRetries: 0 },
        scheduleConfig: { cron: 'cron', intervalMs: 60000, timezone: 'timezone' },
        timeoutMs: 1000,
        webhookConfig: {},
      },
      name: 'x',
      type: 'event',
      workflowVersionId: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.triggers.retrieve('trg_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.triggers.update('trg_abc123def456', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.triggers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.triggers.list(
        {
          isActive: true,
          page: 0,
          pageSize: 20,
          search: 'search',
          type: 'event',
          workflowVersionId: 'workflowVersionId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Triglit.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.triggers.delete('trg_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listByWorkflowVersion', async () => {
    const responsePromise = client.triggers.listByWorkflowVersion('wfv_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listByWorkflowVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.triggers.listByWorkflowVersion(
        'wfv_abc123def456',
        { page: 0, pageSize: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Triglit.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('resumeExecution: only required params', async () => {
    const responsePromise = client.triggers.resumeExecution({ resumeToken: 'x', runId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resumeExecution: required and optional params', async () => {
    const response = await client.triggers.resumeExecution({ resumeToken: 'x', runId: 'x', input: {} });
  });

  // Prism tests are disabled
  test.skip('triggerWebhook', async () => {
    const responsePromise = client.triggers.triggerWebhook('trg_abc123def456', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
