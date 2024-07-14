import {
  toggleModalOpenSelector,
  onDocumentKeydownTemplate
} from './handler';

export const Popup = function({rootElement, onOpenPopupCallback, onClosePopupCallback, closeElement}) {
  const isCorrectParams = rootElement instanceof HTMLElement
    && closeElement instanceof HTMLElement
    && typeof(onOpenPopupCallback) === 'function';

  if (isCorrectParams) {
    this.rootElement = rootElement;
    this.closeElement = closeElement;

    const onDocumentKeydown = onDocumentKeydownTemplate.bind(this);

    this.open = (data) => {
      onOpenPopupCallback(data);
      this.rootElement.classList.remove('hidden');
      toggleModalOpenSelector(true);
      document.addEventListener('keydown', onDocumentKeydown);
      closeElement.addEventListener('click', this.close);
    };

    this.close = () => {
      if (onOpenPopupCallback && typeof(onClosePopupCallback) === 'function') {
        onClosePopupCallback();
      }
      this.rootElement.classList.add('hidden');
      toggleModalOpenSelector();
      closeElement.removeEventListener('click', this.close);
      document.removeEventListener('keydown', onDocumentKeydown);
    };

    return;
  }

  throw new Error('Invalid build Popup!');
};

