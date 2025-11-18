// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Triglit from 'triglit';

const client = new Triglit({
	apiKey: 'My API Key',
	baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subTenants', () => {
	// Prism tests are disabled
	test.skip('create: only required params', async () => {
		const responsePromise = client.subTenants.create({ name: 'x' });
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
		const response = await client.subTenants.create({
			name: 'x',
			description: 'description',
			subTenantId: 'x',
		});
	});

	// Prism tests are disabled
	test.skip('retrieve', async () => {
		const responsePromise = client.subTenants.retrieve('st_abc123def456');
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
		const responsePromise = client.subTenants.update('st_abc123def456', {});
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
		const responsePromise = client.subTenants.list();
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
			client.subTenants.list({ page: 0, pageSize: 20 }, { path: '/_stainless_unknown_path' }),
		).rejects.toThrow(Triglit.NotFoundError);
	});

	// Prism tests are disabled
	test.skip('delete', async () => {
		const responsePromise = client.subTenants.delete('st_abc123def456');
		const rawResponse = await responsePromise.asResponse();
		expect(rawResponse).toBeInstanceOf(Response);
		const response = await responsePromise;
		expect(response).not.toBeInstanceOf(Response);
		const dataAndResponse = await responsePromise.withResponse();
		expect(dataAndResponse.data).toBe(response);
		expect(dataAndResponse.response).toBe(rawResponse);
	});

	// Prism tests are disabled
	test.skip('listCombined', async () => {
		const responsePromise = client.subTenants.listCombined();
		const rawResponse = await responsePromise.asResponse();
		expect(rawResponse).toBeInstanceOf(Response);
		const response = await responsePromise;
		expect(response).not.toBeInstanceOf(Response);
		const dataAndResponse = await responsePromise.withResponse();
		expect(dataAndResponse.data).toBe(response);
		expect(dataAndResponse.response).toBe(rawResponse);
	});

	// Prism tests are disabled
	test.skip('listCombined: request options and params are passed correctly', async () => {
		// ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
		await expect(
			client.subTenants.listCombined({ page: 0, pageSize: 20 }, { path: '/_stainless_unknown_path' }),
		).rejects.toThrow(Triglit.NotFoundError);
	});

	// Prism tests are disabled
	test.skip('retrieveByID', async () => {
		const responsePromise = client.subTenants.retrieveByID('production');
		const rawResponse = await responsePromise.asResponse();
		expect(rawResponse).toBeInstanceOf(Response);
		const response = await responsePromise;
		expect(response).not.toBeInstanceOf(Response);
		const dataAndResponse = await responsePromise.withResponse();
		expect(dataAndResponse.data).toBe(response);
		expect(dataAndResponse.response).toBe(rawResponse);
	});
});
