import { notificationLib } from '../../shared';

const { Notification, NotificationEvent, EventTypes } = notificationLib;

export const setDocumentInnerPointClickEvent = (notification, rootElement) => {
  const onRootElementClick = (event) => {
    if (event.target === event.currentTarget) {
      notification.close();
    }
  };

  if (notification instanceof Notification && rootElement instanceof HTMLElement) {
    notification.addEvent(new NotificationEvent(
      EventTypes.OPEN,
      () => rootElement.addEventListener('click', onRootElementClick)
    ));

    notification.addEvent(new NotificationEvent(
      EventTypes.CLOSE,
      () => rootElement.removeEventListener('click', onRootElementClick)
    ));

    return;
  }

  throw new Error('Invalid arguments');
};
