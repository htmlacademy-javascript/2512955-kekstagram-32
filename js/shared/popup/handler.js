import { keyboardTools } from '../../utills';
import { cssTools } from '../../utills';

const { isEscapeKey } = keyboardTools;
const { toggleHiddenClassInElement } = cssTools;

export const toggleModalOpenSelector = (isOpen = false) => {
  const bodyElement = document.querySelector('body');
  toggleHiddenClassInElement(bodyElement, isOpen, 'modal-open');
};

const isNotClosableByEscape = (element) =>
  (element instanceof HTMLInputElement && !['radio', 'checkbox'].includes(element.type))
  || element instanceof HTMLTextAreaElement;


export const onDocumentKeydownTemplate = function (event) {
  if (isEscapeKey(event) && !isNotClosableByEscape(event.target)) {
    this.close();
  }
};
