import { onDocumentKeydownTemplate } from './document-keydown-handler';
import { EVENT_TYPES, PushEvent } from './events';

export class PushObject {
  onOpenCallback;
  onCloseCallback;
  onDocumentKeydown;
  pushEvents;

  constructor(onOpen, onClose) {
    if (typeof(onOpen) === 'function') {
      this.onOpenCallback = onOpen;
      this.onCloseCallback = onClose;
      this.onDocumentKeydown = onDocumentKeydownTemplate.bind(this);
      this.pushEvents = [];
      this.applyEvents = this.applyEvents.bind(this);
      this.addEvent = this.addEvent.bind(this);
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.setOnDocumentEscapeKeydownEvent = this.setOnDocumentEscapeKeydownEvent.bind(this);
      this.removeOnDocumentEscapeKeydownEvent = this.removeOnDocumentEscapeKeydownEvent.bind(this);
      return;
    }

    throw new Error('PushObject build failed');
  }

  applyEvents(eventType) {
    this.pushEvents.filter((event) => event.type === eventType)
      .forEach((event) => event.listener());
  }

  addEvent(pushEvent) {
    if (pushEvent instanceof PushEvent) {
      if (!this.pushEvents.find((current) => current.type === pushEvent.type && current.listener === pushEvent.listener)) {
        this.pushEvents.push(pushEvent);
      }
    }
  }

  setOnDocumentEscapeKeydownEvent() {
    document.addEventListener('keydown', this.onDocumentKeydown);
  }

  removeOnDocumentEscapeKeydownEvent() {
    document.removeEventListener('keydown', this.onDocumentKeydown);
  }

  open(data) {
    this.onOpenCallback(data);
    this.applyEvents(EVENT_TYPES.OPEN);
    this.setOnDocumentEscapeKeydownEvent();
  }

  close() {
    if (this.onCloseCallback && typeof(this.onCloseCallback) === 'function') {
      this.onCloseCallback();
    }

    this.applyEvents(EVENT_TYPES.CLOSE);
    this.removeOnDocumentEscapeKeydownEvent();
  }
}