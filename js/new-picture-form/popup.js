import { popupLib } from '../shared';
import {
  configureScaleEvents,
  configureValidationEvents
} from './configure';
import {
  configureFilterSliderEvents
} from './configure';
import { setupFormPictures } from './setup';
import { resetNewPictureFormValues } from './reset';

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
  const filterSliderEvents = configureFilterSliderEvents(newPictureForm);
  const formPictures = setupFormPictures(newPictureForm);

  const onOpenPopupCallback = () => {
    formPictures.set(pictureURL);
    scaleEvents.set();
    validationEvents.set();
    filterSliderEvents.set();
  };

  const onClosePopupCallback = () => {
    formPictures.remove();
    scaleEvents.remove();
    validationEvents.remove();
    filterSliderEvents.remove();
    resetNewPictureFormValues(newPictureForm);
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
