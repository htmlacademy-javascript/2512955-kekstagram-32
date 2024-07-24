import { keyboardTools } from '../../utills';

export const toggleModalOpenSelector = (isOpen = false) => {
  const bodyElement = document.querySelector('body');

  if (isOpen) {
    bodyElement.classList.add('modal-open');
    return;
  }
  bodyElement.classList.remove('modal-open');
};

const isNotClosableByEscape = (element) =>
  (element instanceof HTMLInputElement && !['radio', 'checkbox'].includes(element.type))
  || element instanceof HTMLTextAreaElement;


export const onDocumentKeydownTemplate = function (event) {
  if (keyboardTools.isEscapeKey(event) && !isNotClosableByEscape(event.target)) {
    this.close();
  }
};
