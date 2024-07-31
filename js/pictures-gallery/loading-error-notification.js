import { notificationLib } from '../shared';
import { htmlTools } from '../utills';

const { Notification } = notificationLib;
const { getHtmlTemplate, renderHtmlElement } = htmlTools;

export const showLodingErrorNotification = () => {
  const notificationElement = getHtmlTemplate('data-error')
    .cloneNode(true)
    .querySelector('.data-error');

  const renderNotification = () => renderHtmlElement(document.body, [notificationElement]);
  const closeNotification = () => notificationElement.remove();

  const notification = new Notification({
    onOpenCallback: renderNotification,
    onCloseCallback: closeNotification
  });

  notification.open();
};
