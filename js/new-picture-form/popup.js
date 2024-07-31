import { popupLib } from '../shared';
import {
  configureScaleEvents,
  configureValidationEvents
} from './configure';
import {
  configureFilterSliderEvents
} from './configure';

const { Popup } = popupLib;

export const createNewPicturePopup = (newPictureForm, downloadPictureInput, pristineValidator) => {
  const scaleEvents = configureScaleEvents(newPictureForm);
  const validationEvents = configureValidationEvents(pristineValidator, newPictureForm);
  const filterSliderEvents = configureFilterSliderEvents(newPictureForm);
  // eslint-disable-next-line no-unused-vars
  const onOpenPopupCallback = (data) => {
    scaleEvents.set();
    validationEvents.set();
    filterSliderEvents.set();
  };

  const onClosePopupCallback = () => {
    scaleEvents.remove();
    validationEvents.remove();
    filterSliderEvents.remove();
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
