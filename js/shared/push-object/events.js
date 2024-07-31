export const EVENT_TYPES = {
  OPEN: 'open',
  CLOSE: 'close'
};

export function PushEvent(eventType, listener) {
  if (typeof(listener) === 'function') {
    this.type = eventType;
    this.listener = listener;
    return;
  }

  throw new Error('PushEvent build failed!');
}
