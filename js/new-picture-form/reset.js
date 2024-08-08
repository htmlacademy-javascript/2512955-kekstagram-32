export const resetNewPictureForm = (newPictureForm) => {
  if (newPictureForm instanceof HTMLFormElement) {
    newPictureForm.querySelector('#upload-file').setAttribute('value', '');
    newPictureForm.querySelector('#effect-none').setAttribute('checked', true);
    newPictureForm.querySelector('.text__description').setAttribute('value', '');
    newPictureForm.querySelector('.text__hashtags').setAttribute('value', '');
    const imagePreviewElement = newPictureForm.querySelector('.img-upload__preview')
      .querySelector('img');
    imagePreviewElement.setAttribute('style', '');
    imagePreviewElement.setAttribute('src', '');
  }
};
