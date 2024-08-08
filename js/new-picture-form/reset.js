export const resetNewPictureForm = (newPictureForm) => {
  if (newPictureForm instanceof HTMLFormElement) {
    newPictureForm.querySelector('#upload-file').value = null;
    newPictureForm.querySelector('#effect-none').checked = true;
    newPictureForm.querySelector('.text__description').value = null;
    newPictureForm.querySelector('.text__hashtags').value = null;
    const imagePreviewElement = newPictureForm.querySelector('.img-upload__preview')
      .querySelector('img');
    imagePreviewElement.style = null;
    imagePreviewElement.src = null;
    Array.from(newPictureForm.querySelectorAll('effects__preview'))
      .forEach((element) => {
        element.style = null;
      });
  }
};
