import { keyboardTools } from '../../utills';

const { isEscapeKey } = keyboardTools;

const isNotClosableByEscape = (element) =>
  (element instanceof HTMLInputElement && !['radio', 'checkbox', 'file'].includes(element.type))
  || element instanceof HTMLTextAreaElement;


export const onDocumentKeydownTemplate = function (event) {
  if (isEscapeKey(event) && !isNotClosableByEscape(event.target)) {
    this.close();
  }
};
