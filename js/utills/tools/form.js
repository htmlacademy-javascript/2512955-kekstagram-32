import {
  fillHtmlElement
} from './html';

export const QUERY_TYPES = {
  POST: 'POST',
  GET: 'GET'
};

export const ENCTYPES = {
  MULTIPART: 'multipart/form-data',
  PLAINTEXT: 'text/plain',
  DEFAULT: 'application/x-www-form-urlencoded'
};

export const setFormAttributes = (form, method, enctype, action) => {
  const isCorrectParams = form instanceof HTMLFormElement
    && action instanceof URL
    && Object.keys(QUERY_TYPES).includes((current) => current === method)
    && (enctype) ? Object.keys(ENCTYPES).includes((current) => current === enctype) : true;

  if (isCorrectParams) {
    fillHtmlElement(
      form,
      {
        method,
        action,
      }
    );

    if (enctype) {
      form.enctype = enctype;
    }
    return;
  }

  throw new Error('Invalid Form Attributes');
};
