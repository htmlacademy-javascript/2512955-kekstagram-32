import { getOtherUserPictures } from './api';
import { createPictureItem } from './picture-item';

export const createPictures = () => {
  const picturesViews = getOtherUserPictures()
    .map((picture) => createPictureItem(picture));
  return picturesViews;
};
