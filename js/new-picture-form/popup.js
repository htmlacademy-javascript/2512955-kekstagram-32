import { Popup } from '../shared/popup';
import {
  configureScaleEvents,
  configureSubmitNewPictureForm,
  configurePristineValidation,
} from './configure';

export const createNewPicturePopup = (newPictureForm, downloadPictureInput) => {
  const pristineValidator = configurePristineValidation(newPictureForm);
  const scaleEvents = configureScaleEvents(newPictureForm);
  const submitEvent = configureSubmitNewPictureForm(newPictureForm, pristineValidator);
  // eslint-disable-next-line no-unused-vars
  const onOpenPopupCallback = (data) => {
    submitEvent.set();
    scaleEvents.set();
  };

  const onClosePopupCallback = () => {
    submitEvent.remove();
    scaleEvents.remove();
    downloadPictureInput.value = null;
    pristineValidator.destroy();
  };

  if (newPictureForm instanceof HTMLFormElement && downloadPictureInput instanceof HTMLInputElement) {
    return new Popup({
      rootElement: newPictureForm.querySelector('.img-upload__overlay'),
      onClosePopupCallback,
      onOpenPopupCallback,
      closeElement: newPictureForm.querySelector('#upload-cancel')
    });
  }

  throw new Error('Invalid arguments');
};
