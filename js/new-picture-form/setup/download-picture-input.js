export const setupDownloadPictureInput = (downloadPictureInput, onDownloadPictureChange) => {
  if (downloadPictureInput instanceof HTMLInputElement && typeof(onDownloadPictureChange) === 'function') {
    downloadPictureInput.addEventListener('change', onDownloadPictureChange);
    return;
  }

  throw new Error('DownloadPictureInput is not HTML input');
};
