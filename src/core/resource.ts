// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Triglit } from '../client';

export abstract class APIResource {
  protected _client: Triglit;

  constructor(client: Triglit) {
    this._client = client;
  }
}
