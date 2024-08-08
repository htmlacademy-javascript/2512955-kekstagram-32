import { notificationLib } from '../../shared';

const { Notification, NotificationEvent, EventTypes } = notificationLib;

export const setDocumentInnerPointClickEvent = (notification, rootElement) => {
  const onDocumentInnerPointClickEvent = (event) => {
    if (event.target === event.currentTarget) {
      notification.close();
    }
  };

  if (notification instanceof Notification && rootElement instanceof HTMLElement) {
    notification.addEvent(new NotificationEvent(
      EventTypes.OPEN,
      () => rootElement.addEventListener('click', onDocumentInnerPointClickEvent)
    ));

    notification.addEvent(new NotificationEvent(
      EventTypes.CLOSE,
      () => rootElement.removeEventListener('click', onDocumentInnerPointClickEvent)
    ));

    return;
  }

  throw new Error('Invalid arguments');
};
