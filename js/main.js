import {
  createPictures,
  renderPictureList
} from './other-user-pictures';

renderPictureList(document.querySelector('.pictures'), createPictures());
