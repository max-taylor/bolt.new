/**
 * This client-only module that contains everything related to auth and is used
 * to avoid importing `@webcontainer/api` in the server bundle.
 */

import { auth, type AuthAPI } from '@webcontainer/api';

auth.init({
  clientId: 'wc_api_maxjt11_14c28d91bb9e93f0d62f147195e757d2',
  scope: '',
});

export { auth };
