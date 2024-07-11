import { htmlTools } from '../../utills';

const {
  getHtmlTemplate,
  fillHtmlElement
} = htmlTools;

const template = getHtmlTemplate('picture');

export const createPictureItem = ({ description, url, likes, comments }) => {
  const view = template.cloneNode(true).querySelector('.picture');

  fillHtmlElement(
    view.querySelector('.picture__img'),
    {
      src: url,
      alt: description
    },
  );

  fillHtmlElement(
    view.querySelector('.picture__likes'),
    {
      textContent: likes
    },
  );

  fillHtmlElement(
    view.querySelector('.picture__comments'),
    {
      textContent: comments?.length ?? 0
    },
  );
  return view;
};
