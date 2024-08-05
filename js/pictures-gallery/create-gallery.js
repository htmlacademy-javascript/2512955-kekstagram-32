import { getPicturesData } from './api';
import { htmlTools } from '../utills';
import { createActivePicturePopup } from '../active-picture-popup/create-active-picture';
import { createPicturesElements } from '../other-user-pictures';
import { showLodingErrorNotification } from './loading-error-notification';
import { createGalleryFilter } from './gallery-filter';

const INVALID_ID = -1;

const { renderHtmlElement } = htmlTools;

const activePicturePopup = createActivePicturePopup();
const picturesListRootElement = document.querySelector('.pictures');
const picturesFilterRootElement = document.querySelector('.img-filters');

const createPicturesClickElementEvent = (picturesData) => (event) => {
  const element = event.target;
  const pictureRootElement = element.closest('.picture');
  if (pictureRootElement) {
    event.preventDefault();
    const acivePictureId = pictureRootElement?.dataset?.idPicture ?? INVALID_ID;
    const activePictureData = picturesData.find((value) => value.id === +acivePictureId);

    if (activePictureData) {
      activePicturePopup.open(activePictureData);
    }
  }
};

const onFilterChangeCallback = (galleryData) => {
  const renderedPictures = picturesListRootElement.querySelectorAll('.picture');
  Array.from(renderedPictures).forEach((current) => {
    current.remove();
  });

  renderHtmlElement(
    picturesListRootElement,
    createPicturesElements(galleryData)
  );
};

export const createGallery = () => {
  getPicturesData()
    .then((data) => {
      createGalleryFilter({
        galleryData: data,
        onFilterChangeCallback,
        rootElement: picturesFilterRootElement
      });

      const onPicturesListRootElementClick = createPicturesClickElementEvent(data);
      picturesListRootElement.addEventListener('click', onPicturesListRootElementClick);
    })
    .catch(showLodingErrorNotification);
};
