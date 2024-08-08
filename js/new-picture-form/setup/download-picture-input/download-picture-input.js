import { SUPPORTED_EXTENSIONS } from './constants';
import { checkFile } from './check-file';
import { createUploadErrorNotification } from '../../notifications';

const setAcceptAttribute = (downloadPictureInput) => {
  const acceptAttributeValue = SUPPORTED_EXTENSIONS.map((current) => `image/${current}`)
    .join(', ');
  downloadPictureInput.setAttribute('accept', acceptAttributeValue);
};

export const setupDownloadPictureInput = (downloadPictureInput, onSelectedFileCallback) => {
  const onDownloadInputChange = (event) => {
    const element = event.target;

    if (element.value && (element?.files?.length ?? 0) > 0) {
      const file = element.files[0];
      try {
        checkFile(file);
        onSelectedFileCallback(file);
      } catch(err) {
        createUploadErrorNotification(err).open();
      }
    }
  };

  if (downloadPictureInput instanceof HTMLInputElement && typeof (onSelectedFileCallback) === 'function') {
    setAcceptAttribute(downloadPictureInput);
    downloadPictureInput.addEventListener('change', onDownloadInputChange);
    return;
  }

  throw new Error('DownloadPictureInput is not HTML input');
};
