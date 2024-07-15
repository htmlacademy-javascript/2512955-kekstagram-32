import { htmlTools } from '../../utills';

const {
  getHtmlTemplate,
  fillHtmlElement
} = htmlTools;

const template = getHtmlTemplate('picture');

export const createPictureElement = (pictureData) => {
  const { description, url, likes, comments } = pictureData;

  const element = template.cloneNode(true).querySelector('.picture');

  fillHtmlElement(
    element.querySelector('.picture__img'),
    {
      src: url,
      alt: description
    },
  );

  fillHtmlElement(
    element.querySelector('.picture__likes'),
    {
      textContent: likes
    },
  );

  fillHtmlElement(
    element.querySelector('.picture__comments'),
    {
      textContent: comments?.length ?? 0
    },
  );

  element.dataset.idPicture = pictureData.id;

  return element;
};
