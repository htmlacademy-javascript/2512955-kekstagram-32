import {
  setupDownloadPictureInput,
  setupNewPictureFormAttributes
} from './setup';
import { createNewPicturePopup } from './popup';
import { configureSubmitNewPictureForm } from './configure';
import { configurePristineValidation } from './configure';
import {
  popupLib
} from '../shared';
import { resetNewPictureForm } from './reset';

const downloadInputElement = document.querySelector('.img-upload__input');
const newPictureForm = document.querySelector('.img-upload__form');
const { PopupEvent, EVENT_TYPES } = popupLib;

const onDownloadInputChange = (event) => {
  const element = event.target;

  if (element.value && (element?.files?.length ?? 0) > 0) {
    const pristineValidator = configurePristineValidation(newPictureForm);

    const newPicturePopup = createNewPicturePopup(
      newPictureForm,
      downloadInputElement,
      pristineValidator
    );

    const submitEvent = configureSubmitNewPictureForm(
      newPictureForm,
      pristineValidator,
      newPicturePopup
    );

    submitEvent.set();
    newPicturePopup.open(element.value);

    newPicturePopup.addEvent(new PopupEvent(
      EVENT_TYPES.CLOSE,
      () => resetNewPictureForm(newPictureForm)
    ));
    newPicturePopup.addEvent(new PopupEvent(
      EVENT_TYPES.CLOSE,
      submitEvent.remove
    ));
  }
};

export const configureNewPictureDownloadComponent = () => {
  setupNewPictureFormAttributes(newPictureForm);
  setupDownloadPictureInput(downloadInputElement, onDownloadInputChange);
};
