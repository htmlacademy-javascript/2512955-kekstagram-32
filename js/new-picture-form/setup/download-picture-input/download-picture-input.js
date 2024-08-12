import { SUPPORTED_EXTENSIONS } from './constants';
import { checkFile } from './check-file';
import { createUploadErrorNotification } from '../../notifications';

const setAcceptAttribute = (downloadPictureInput) => {
  const acceptAttributeValue = SUPPORTED_EXTENSIONS.map((current) => `image/${current}`)
    .join(', ');
  downloadPictureInput.setAttribute('accept', acceptAttributeValue);
};

export const setupDownloadPictureInput = (downloadPictureInput, onFileLoadCallback) => {
  const onDownloadInputChange = (event) => {
    const element = event.target;

    if (element.value && (element?.files?.length ?? 0) > 0) {
      const file = element.files[0];
      try {
        checkFile(file);
        onFileLoadCallback(file);
      } catch(err) {
        createUploadErrorNotification(err).open();
      }
    }
  };

  if (downloadPictureInput instanceof HTMLInputElement && typeof (onFileLoadCallback) === 'function') {
    setAcceptAttribute(downloadPictureInput);
    downloadPictureInput.addEventListener('change', onDownloadInputChange);
    return;
  }

  throw new Error('Invalid arguments');
};
