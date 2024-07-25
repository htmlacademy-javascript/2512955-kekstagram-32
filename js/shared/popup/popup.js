import {
  PopupEvent,
  EVENT_TYPES
} from './popup-event';
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
    const popupEvents = [];

    const onDocumentKeydown = onDocumentKeydownTemplate.bind(this);

    const applyPopupEvents = (type) => {
      popupEvents.filter((current) => current.type === type).forEach((currentCallback) => currentCallback.listener());
    };

    this.open = (data) => {
      onOpenPopupCallback(data);
      this.rootElement.classList.remove('hidden');
      toggleModalOpenSelector(true);
      document.addEventListener('keydown', onDocumentKeydown);
      closeElement.addEventListener('click', this.close);
      applyPopupEvents(EVENT_TYPES.OPEN);
    };

    this.close = () => {
      if (onClosePopupCallback && typeof(onClosePopupCallback) === 'function') {
        onClosePopupCallback();
      }
      this.rootElement.classList.add('hidden');
      toggleModalOpenSelector();
      closeElement.removeEventListener('click', this.close);
      document.removeEventListener('keydown', onDocumentKeydown);
      applyPopupEvents(EVENT_TYPES.CLOSE);
    };

    this.addEvent = (additionalEvent) => {
      if (additionalEvent instanceof PopupEvent) {
        if (!popupEvents.find((current) => current.type === additionalEvent.type && current.listener === additionalEvent.listener)) {
          popupEvents.push(additionalEvent);
        }
      }
    };

    return;
  }

  throw new Error('Invalid build Popup!');
};

