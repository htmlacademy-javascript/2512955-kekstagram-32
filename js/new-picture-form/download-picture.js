import {
  setupDownloadPictureInput,
  setupNewPictureFormAttributes
} from './setup';
import { createNewPicturePopup } from './popup';

const downloadInputElement = document.querySelector('.img-upload__input');
const newPictureForm = document.querySelector('.img-upload__form');

const newPicturePopup = createNewPicturePopup(newPictureForm, downloadInputElement);

const onDownloadInputChange = (event) => {
  const element = event.target;

  if (element.value && (element?.files?.length ?? 0) > 0) {
    newPicturePopup.open(element.value);
  }
};

export const configureNewPictureDownloadComponent = () => {
  setupNewPictureFormAttributes(newPictureForm);
  setupDownloadPictureInput(downloadInputElement, onDownloadInputChange);
};
