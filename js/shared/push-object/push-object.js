import { onDocumentKeydownTemplate } from './document-keydown-handler';
import { EventTypes, PushEvent } from './events';

export class PushObject {
  _onDocumentKeydown;
  _useOnDocumentKeydownEvent;
  _onOpenCallback;
  _onCloseCallback;
  _pushEvents;
  _closeElement;

  constructor(onOpen, onClose, closeElement = null, useOndocumentKeydownClose = true) {
    if (typeof(onOpen) === 'function') {
      this._onOpenCallback = onOpen;
      this._onCloseCallback = onClose;
      this._pushEvents = [];
      this._closeElement = closeElement;
      this._useOnDocumentKeydownEvent = useOndocumentKeydownClose;
      this._onDocumentKeydown = onDocumentKeydownTemplate.bind(this);
      this._applyEvents = this._applyEvents.bind(this);
      this._onCloseElementClick = this._onCloseElementClick.bind(this);
      this.addEvent = this.addEvent.bind(this);
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.setOnDocumentEscapeKeydownEvent = this.setOnDocumentEscapeKeydownEvent.bind(this);
      this.removeOnDocumentEscapeKeydownEvent = this.removeOnDocumentEscapeKeydownEvent.bind(this);
      return;
    }

    throw new Error('PushObject build failed');
  }

  _onCloseElementClick() {
    this.close();
  }

  _applyEvents(eventType) {
    this._pushEvents.filter((event) => event.type === eventType)
      .forEach((event) => {
        event.listener();
      });
  }

  addEvent(pushEvent) {
    if (pushEvent instanceof PushEvent) {
      if (!this._pushEvents.find((current) => current.type === pushEvent.type && current.listener === pushEvent.listener)) {
        this._pushEvents.push(pushEvent);
      }
    }
  }

  setOnDocumentEscapeKeydownEvent() {
    if (this._useOnDocumentKeydownEvent) {
      document.addEventListener('keydown', this._onDocumentKeydown);
    }
  }

  removeOnDocumentEscapeKeydownEvent() {
    if (this._useOnDocumentKeydownEvent) {
      document.removeEventListener('keydown', this._onDocumentKeydown);
    }
  }

  open(data) {
    this._onOpenCallback(data);
    this._applyEvents(EventTypes.OPEN);
    this.setOnDocumentEscapeKeydownEvent();

    if (this._closeElement instanceof HTMLElement) {
      this._closeElement.addEventListener('click', this._onCloseElementClick);
    }
  }

  close() {
    if (this._onCloseCallback && typeof(this._onCloseCallback) === 'function') {
      this._onCloseCallback();
    }

    if (this._closeElement instanceof HTMLElement) {
      this._closeElement.removeEventListener('click', this._onCloseElementClick);
    }

    this._applyEvents(EventTypes.CLOSE);
    this.removeOnDocumentEscapeKeydownEvent();
  }
}
