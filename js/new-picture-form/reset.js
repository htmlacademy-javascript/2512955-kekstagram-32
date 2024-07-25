export const resetNewPictureForm = (newPictureForm) => {
  if (newPictureForm instanceof HTMLFormElement) {
    newPictureForm.querySelector('#upload-file').value = '';
    newPictureForm.querySelector('#effect-none').checked = true;
    newPictureForm.querySelector('.text__description').value = '';
    newPictureForm.querySelector('.text__hashtags').value = '';
    newPictureForm.querySelector('.img-upload__preview')
      .querySelector('img').style = null;
  }
};
