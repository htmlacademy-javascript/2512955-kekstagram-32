import {
  fillHtmlElement
} from './html';
import { QueryTypes } from '../../config';

export const Enctypes = {
  MULTIPART: 'multipart/form-data',
  PLAINTEXT: 'text/plain',
  DEFAULT: 'application/x-www-form-urlencoded'
};

export const setFormAttributes = (form, method, enctype, action) => {
  const isCorrectParams = form instanceof HTMLFormElement
    && action instanceof URL
    && Object.keys(QueryTypes).includes((current) => current === method)
    && (enctype) ? Object.keys(QueryTypes).includes((current) => current === enctype) : true;

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
