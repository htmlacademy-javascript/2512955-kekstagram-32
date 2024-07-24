export const EVENT_TYPES = {
  OPEN: 'open',
  CLOSE: 'close'
};

export function PopupEvent(eventType, listener) {
  if (typeof(listener) === 'function') {
    this.type = eventType;
    this.listener = listener;
    return;
  }

  throw new Error('PopupEvent build failed!');
}
