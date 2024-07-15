import { getPicturesData } from './api';
import { htmlTools } from '../utills';
import { createActivePicturePopup } from '../active-picture-popup/create-active-picture';
import { createPicturesElements } from '../other-user-pictures';

const INVALID_ID = -1;

const { renderHtmlElement } = htmlTools;

const picturesData = getPicturesData();

const activePicturePopup = createActivePicturePopup();

export const createGallery = () => {
  const picturesListRootElement = document.querySelector('.pictures');

  const onPicturesListRootElementClick = (event) => {
    const element = event.target;
    const pictureElement = element.matches('.picture__img');
    const pictureRootElement = element.closest('.picture');
    if (pictureElement && pictureRootElement) {
      const acivePictureId = pictureRootElement?.dataset?.idPicture ?? INVALID_ID;
      const activePictureData = picturesData.find((value) => value.id === +acivePictureId);

      if (activePictureData) {
        activePicturePopup.open(activePictureData);
      }
    }
  };

  picturesListRootElement.addEventListener('click', onPicturesListRootElementClick);

  renderHtmlElement(
    picturesListRootElement,
    createPicturesElements(picturesData)
  );
};
