// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Triglit from 'triglit';

const client = new Triglit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customNodes', () => {
  // Prism tests are disabled
  test.skip('retrieveRegistry', async () => {
    const responsePromise = client.customNodes.retrieveRegistry();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
