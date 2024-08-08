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
import { resetNewPictureForm } from '../reset';
import { createSendPictureFormCallback } from '../send-picture-form';
import { loadFile } from './load-file';

const { PopupEvent, EventTypes } = popupLib;

const newPictureForm = document.querySelector('.img-upload__form');
const downloadInputElement = newPictureForm.querySelector('.img-upload__input');
const newPicturePreviewElement = newPictureForm.querySelector('.img-upload__preview img');

const onFileLoad = (event) => {
  const readingFileResult = event.target.result;
  const pristineValidator = configurePristineValidation(newPictureForm);

  const newPicturePopup = createNewPicturePopup(
    newPictureForm,
    downloadInputElement,
    pristineValidator
  );

  const setSrcEvent = new PopupEvent(
    EventTypes.OPEN,
    () => {
      newPicturePreviewElement.setAttribute('src', readingFileResult);
    }
  );

  newPicturePopup.addEvent(setSrcEvent);

  const sendPictureCallback = createSendPictureFormCallback(newPictureForm, pristineValidator, newPicturePopup);
  const submitEvent = configureSubmitNewPictureForm(
    newPictureForm,
    sendPictureCallback
  );

  submitEvent.set();
  newPicturePopup.open(readingFileResult);

  newPicturePopup.addEvent(new PopupEvent(
    EventTypes.CLOSE,
    () => resetNewPictureForm(newPictureForm)
  ));
  newPicturePopup.addEvent(new PopupEvent(
    EventTypes.CLOSE,
    submitEvent.remove
  ));
};

const onFileSelected = (file) => {
  loadFile(file, onFileLoad);
};

export const configureNewPictureDownloadComponent = () => {
  setupNewPictureFormAttributes(newPictureForm);
  setupDownloadPictureInput(downloadInputElement, onFileSelected);
};
