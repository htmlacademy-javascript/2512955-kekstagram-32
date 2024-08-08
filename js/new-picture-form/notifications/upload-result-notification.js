import { notificationLib } from '../../shared';
import { htmlTools } from '../../utills';
import { setDocumentInnerPointClickEvent } from './document-click-handler';

const { Notification } = notificationLib;
const { getHtmlTemplate, renderHtmlElement, fillHtmlElement } = htmlTools;

const createUploadResultNotification = (rootElement, closeElement) => {
  const onNotificationOpen = () => {
    renderHtmlElement(
      document.body,
      [rootElement]
    );
  };

  const onNotificationClose = () => {
    rootElement.remove();
  };

  const notification = new Notification({
    onOpenCallback: onNotificationOpen,
    onCloseCallback: onNotificationClose,
    closeElement,
    autoClosable: false
  });

  setDocumentInnerPointClickEvent(notification, rootElement);

  if (rootElement instanceof HTMLElement && closeElement instanceof HTMLElement) {
    return notification;
  }

  throw new Error('Invalid arguments');
};

export const createUploadErrorNotification = (error = null) => {
  const rootElement = getHtmlTemplate('error')
    .querySelector('.error')
    .cloneNode(true);

  const closeElement = rootElement.querySelector('.error__button');

  if (error instanceof Error) {
    fillHtmlElement(
      rootElement.querySelector('.error__title'),
      {
        textContent: error.message
      }
    );
  }

  return createUploadResultNotification(rootElement, closeElement);
};

export const createUploadSuccessNotification = () => {
  const rootElement = getHtmlTemplate('success')
    .querySelector('.success')
    .cloneNode(true);

  const closeElement = rootElement.querySelector('.success__button');

  return createUploadResultNotification(rootElement, closeElement);
};
