import { keyboardTools } from '../../utills';

export const toggleModalOpenSelector = (isOpen = false) => {
  const bodyElement = document.querySelector('body');

  if (isOpen) {
    bodyElement.classList.add('modal-open');
    return;
  }
  bodyElement.classList.remove('modal-open');
};

export const onDocumentKeydownTemplate = function (event) {
  if (keyboardTools.isEscapeKey(event)) {
    this.close();
  }
};
