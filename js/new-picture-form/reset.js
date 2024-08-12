export const resetNewPictureFormValues = (newPictureForm) => {
  if (newPictureForm instanceof HTMLFormElement) {
    newPictureForm.querySelector('#upload-file').value = null;
    newPictureForm.querySelector('#effect-none').checked = true;
    newPictureForm.querySelector('.text__description').value = null;
    newPictureForm.querySelector('.text__hashtags').value = null;
  }
};
