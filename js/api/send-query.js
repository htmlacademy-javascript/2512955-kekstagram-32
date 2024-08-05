import { QueryTypes } from '../config';

export const sendQuery = async ({url, errorText = null, method = QueryTypes.GET, body = null}) => {
  if (url instanceof URL) {
    try {
      const response = await fetch(url, { method, body });
      return await response.json();
    } catch (err) {
      throw new Error(errorText ?? err.message);
    }
  }

  throw new Error('Invalid URL argument');
};
