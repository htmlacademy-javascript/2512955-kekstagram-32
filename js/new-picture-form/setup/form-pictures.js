const DEFAULT_PICTURE_URL = 'img/upload-default-image.jpg';

const setImageByEffectElements = (previewImageElement, previewEffectElements, pictureURL) => {
  previewImageElement.src = pictureURL ?? DEFAULT_PICTURE_URL;

  previewEffectElements.forEach((previewElement) => {
    previewElement.style = pictureURL ? `background-image: url(${pictureURL})` : null;
  });
};

export const setupFormPictures = (pictureForm) => {
  if (pictureForm instanceof HTMLFormElement) {
    const previewImageElement = pictureForm.querySelector('.img-upload__preview')
      .querySelector('img');
    const previewEffectElements = Array.from(pictureForm.querySelectorAll('.effects__preview'));

    return {
      set: (pictureURL) => setImageByEffectElements(previewImageElement, previewEffectElements, pictureURL),
      remove: () => setImageByEffectElements(previewImageElement, previewEffectElements, null)
    };
  }

  throw new Error('PictureForm is not Form instance');
};
