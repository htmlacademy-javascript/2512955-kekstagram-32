import { sendNewPicture } from './api';
import {
  createUploadErrorNotification,
  createUploadSuccessNotification
} from './notifications';
import { notificationLib } from '../shared';

const { EVENT_TYPES, NotificationEvent } = notificationLib;

export const createSendPictureFormCallback = (pictureForm, pristineValidator, picturePopup) => {
  const sendPicture = () => {
    if (pristineValidator.validate()) {
      const documentEscapeKeydownEvent = new NotificationEvent(
        EVENT_TYPES.CLOSE,
        picturePopup.setOnDocumentEscapeKeydownEvent
      );

      picturePopup.removeOnDocumentEscapeKeydownEvent();
      const submitButton = pictureForm.querySelector('#upload-submit');
      submitButton.disabled = true;
      const pictureData = new FormData(pictureForm);
      sendNewPicture(pictureData)
        .then(() => {
          picturePopup.close();
          createUploadSuccessNotification().open();
        })
        .catch(() => {
          const errorNotification = createUploadErrorNotification();
          errorNotification.addEvent(documentEscapeKeydownEvent);
          errorNotification.open();
        })
        .finally(() => {
          submitButton.disabled = false;
        });
    }
  };

  return sendPicture;
};
