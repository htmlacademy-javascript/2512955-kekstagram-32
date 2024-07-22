import {
  setupDownloadPictureInput,
  setupNewPictureFormAttributes
} from './setup';
import { createNewPicturePopup } from './popup';
import { configureSubmitNewPictureForm } from './configure';
import { configurePristineValidation } from './configure';
import {
  AdditionalEvent,
  EVENT_TYPES
} from '../shared/popup';

const downloadInputElement = document.querySelector('.img-upload__input');
const newPictureForm = document.querySelector('.img-upload__form');

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
    newPicturePopup.addEvent(new AdditionalEvent(
      EVENT_TYPES.CLOSE,
      submitEvent.remove
    ));
  }
};

export const configureNewPictureDownloadComponent = () => {
  setupNewPictureFormAttributes(newPictureForm);
  setupDownloadPictureInput(downloadInputElement, onDownloadInputChange);
};
