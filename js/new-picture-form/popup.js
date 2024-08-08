import { popupLib } from '../shared';
import {
  configureScaleEvents,
  configureValidationEvents
} from './configure';
import {
  configureFilterSliderEvents
} from './configure';

const { Popup } = popupLib;

export const createNewPicturePopup = ({
  newPictureForm,
  downloadPictureInput,
  pristineValidator,
  pictureURL,
  previewElement
}) => {
  const scaleEvents = configureScaleEvents(newPictureForm);
  const validationEvents = configureValidationEvents(pristineValidator, newPictureForm);
  const filterSliderEvents = configureFilterSliderEvents(newPictureForm, pictureURL);
  // eslint-disable-next-line no-unused-vars
  const onOpenPopupCallback = (data) => {
    previewElement.src = pictureURL;
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

  const elementsIsDomItems = newPictureForm instanceof HTMLFormElement && downloadPictureInput instanceof HTMLInputElement && previewElement instanceof HTMLImageElement;

  if (elementsIsDomItems && URL.canParse(pictureURL)) {
    return new Popup({
      rootElement: newPictureForm.querySelector('.img-upload__overlay'),
      onClosePopupCallback,
      onOpenPopupCallback,
      closeElement: newPictureForm.querySelector('#upload-cancel')
    });
  }

  throw new Error('Invalid arguments');
};
