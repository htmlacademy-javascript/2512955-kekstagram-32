import { cssTools } from '../../utills';

const { toggleHiddenClassInElement } = cssTools;

export const toggleModalOpenSelector = (isOpen = false) => {
  const bodyElement = document.querySelector('body');
  toggleHiddenClassInElement(bodyElement, isOpen, 'modal-open');
};
