// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Triglit from 'triglit';

const client = new Triglit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.workflows.versions.create({
      edges: [{ sourceNodeId: 'x', targetNodeId: 'x' }],
      nodes: [
        {
          id: 'x',
          config: { foo: 'bar' },
          inputSchema: { foo: 'bar' },
          name: 'x',
          outputSchema: { foo: 'bar' },
          position: { x: 0, y: 0 },
          type: 'x',
          version: 'x',
        },
      ],
      workflowId: 'x',
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
    const response = await client.workflows.versions.create({
      edges: [
        {
          sourceNodeId: 'x',
          targetNodeId: 'x',
          condition: 'condition',
          label: 'label',
          sourceOutputKey: 'sourceOutputKey',
          targetInputKey: 'targetInputKey',
        },
      ],
      nodes: [
        {
          id: 'x',
          config: { foo: 'bar' },
          inputSchema: { foo: 'bar' },
          name: 'x',
          outputSchema: { foo: 'bar' },
          position: { x: 0, y: 0 },
          type: 'x',
          version: 'x',
          description: 'description',
        },
      ],
      workflowId: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.workflows.versions.update('wfv_abc123def456', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.workflows.versions.delete('wfv_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list0', async () => {
    const responsePromise = client.workflows.versions.list0('wf_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list0: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.versions.list0(
        'wf_abc123def456',
        { isActive: true, page: 0, pageSize: 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Triglit.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list1: only required params', async () => {
    const responsePromise = client.workflows.versions.list1({ workflowId: 'workflowId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list1: required and optional params', async () => {
    const response = await client.workflows.versions.list1({
      workflowId: 'workflowId',
      isActive: true,
      page: 0,
      pageSize: 20,
      search: 'search',
    });
  });

  // Prism tests are disabled
  test.skip('publish', async () => {
    const responsePromise = client.workflows.versions.publish('wfv_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve0', async () => {
    const responsePromise = client.workflows.versions.retrieve0('wfv_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve1', async () => {
    const responsePromise = client.workflows.versions.retrieve1('wfv_abc123def456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
