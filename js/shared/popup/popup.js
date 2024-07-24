import {
  AdditionalEvent,
  EVENT_TYPES
} from './additional-event';
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
    const additionalEvents = [];

    const onDocumentKeydown = onDocumentKeydownTemplate.bind(this);

    const applyAdditionalEvents = (type) => {
      additionalEvents.filter((current) => current.type === type).forEach((currentCallback) => currentCallback.listener());
    };

    this.open = (data) => {
      onOpenPopupCallback(data);
      this.rootElement.classList.remove('hidden');
      toggleModalOpenSelector(true);
      document.addEventListener('keydown', onDocumentKeydown);
      closeElement.addEventListener('click', this.close);
      applyAdditionalEvents(EVENT_TYPES.OPEN);
    };

    this.close = () => {
      if (onClosePopupCallback && typeof(onClosePopupCallback) === 'function') {
        onClosePopupCallback();
      }
      this.rootElement.classList.add('hidden');
      toggleModalOpenSelector();
      closeElement.removeEventListener('click', this.close);
      document.removeEventListener('keydown', onDocumentKeydown);
      applyAdditionalEvents(EVENT_TYPES.CLOSE);
    };

    this.addEvent = (additionalEvent) => {
      if (additionalEvent instanceof AdditionalEvent) {
        if (!additionalEvents.find((current) => current.type === additionalEvent.type && current.listener === additionalEvent.listener)) {
          additionalEvents.push(additionalEvent);
        }
      }
    };

    return;
  }

  throw new Error('Invalid build Popup!');
};

