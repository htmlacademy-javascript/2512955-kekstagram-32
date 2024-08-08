import { sendNewPicture } from './api';
import {
  createUploadErrorNotification,
  createUploadSuccessNotification
} from './notifications';
import { notificationLib } from '../shared';

const SubmitButtonCaptions = {
  DEFAULT: 'Опубликовать',
  SUBMIT: 'Идет публикация'
};

const { EventTypes, NotificationEvent } = notificationLib;

const tuneSubmitButton = (buttonElement, caption, disabled) => {
  buttonElement.setAttribute('disabled', disabled);
  buttonElement.textContent = caption;
};

export const createSendPictureFormCallback = (pictureForm, pristineValidator, picturePopup) => {
  const sendPicture = () => {
    if (pristineValidator.validate()) {
      const documentEscapeKeydownEvent = new NotificationEvent(
        EventTypes.CLOSE,
        picturePopup.setOnDocumentEscapeKeydownEvent
      );

      picturePopup.removeOnDocumentEscapeKeydownEvent();
      const submitButton = pictureForm.querySelector('#upload-submit');
      submitButton.setAttribute('disabled', true);
      tuneSubmitButton(submitButton, SubmitButtonCaptions.SUBMIT, true);
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
          tuneSubmitButton(submitButton, SubmitButtonCaptions.DEFAULT, false);
        });
    }
  };

  return sendPicture;
};
