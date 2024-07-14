import { createPictureElement } from './picture-element';

export const createPicturesElements = (picturesData) => {
  if (Array.isArray(picturesData)) {
    return picturesData.map((picture) => createPictureElement(picture));
  }

  throw new Error('Invalid picturesData');
};
