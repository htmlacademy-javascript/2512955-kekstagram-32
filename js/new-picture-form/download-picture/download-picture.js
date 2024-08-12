import {
  setupDownloadPictureInput,
  setupNewPictureFormAttributes
} from '../setup';
import { createNewPicturePopup } from '../popup';
import {
  configureSubmitNewPictureForm,
  configurePristineValidation
} from '../configure';
import {
  popupLib
} from '../../shared';
import { createSendPictureFormCallback } from '../send-picture-form';

const { PopupEvent, EventTypes } = popupLib;

const newPictureForm = document.querySelector('.img-upload__form');
const downloadInputElement = newPictureForm.querySelector('.img-upload__input');
const newPicturePreviewElement = newPictureForm.querySelector('.img-upload__preview img');

const onFileLoad = (file) => {
  const fileURL = URL.createObjectURL(file);
  const pristineValidator = configurePristineValidation(newPictureForm);
  const newPicturePopup = createNewPicturePopup({
    newPictureForm,
    downloadPictureInput: downloadInputElement,
    pristineValidator,
    pictureURL: fileURL,
    previewElement: newPicturePreviewElement
  });

  const sendPictureCallback = createSendPictureFormCallback(newPictureForm, pristineValidator, newPicturePopup);
  const submitEvent = configureSubmitNewPictureForm(
    newPictureForm,
    sendPictureCallback
  );

  submitEvent.set();
  newPicturePopup.open(fileURL);

  newPicturePopup.addEvent(new PopupEvent(
    EventTypes.CLOSE,
    () => {
      URL.revokeObjectURL(fileURL);
    }
  ));
  newPicturePopup.addEvent(new PopupEvent(
    EventTypes.CLOSE,
    submitEvent.remove
  ));
};

export const configureNewPictureDownloadComponent = () => {
  setupNewPictureFormAttributes(newPictureForm);
  setupDownloadPictureInput(downloadInputElement, onFileLoad);
};
