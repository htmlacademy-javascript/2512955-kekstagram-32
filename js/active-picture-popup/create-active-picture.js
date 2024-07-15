import {
  htmlTools
} from '../utills';
import { Popup } from '../shared/popup/popup';
import { createPictureComment } from './create-picture-comment';

const { fillHtmlElement, renderHtmlElement } = htmlTools;

const rootElement = document.querySelector('.big-picture');

const renderCommentsList = (root, comments) => {
  if (Array.isArray(comments) && root instanceof HTMLElement) {
    root.innerHTML = '';
    const commentsFragment = document.createDocumentFragment();

    renderHtmlElement(
      commentsFragment,
      comments.map((commentData) => createPictureComment(commentData))
    );

    root.append(commentsFragment);

    return;
  }

  throw new Error('Invalid arguments');
};

const onActivePicturePopupOpen = ({
  description,
  likes,
  comments,
  url
}) => {
  rootElement.querySelector('.social__comment-count').classList.add('hidden');
  rootElement.querySelector('.comments-loader').classList.add('hidden');

  fillHtmlElement(
    rootElement.querySelector('.big-picture__img').querySelector('img'),
    {
      src: url
    }
  );

  fillHtmlElement(
    rootElement.querySelector('.likes-count'),
    {
      textContent: likes
    }
  );

  fillHtmlElement(
    rootElement.querySelector('.social__comment-total-count'),
    {
      textContent: comments?.length ?? 0
    }
  );

  fillHtmlElement(
    rootElement.querySelector('.social__caption'),
    {
      textContent: description
    }
  );

  renderCommentsList(
    rootElement.querySelector('.social__comments'),
    comments
  );
};

export const createActivePicturePopup = () => new Popup({
  rootElement: rootElement,
  onOpenPopupCallback: onActivePicturePopupOpen,
  closeElement: rootElement.querySelector('#picture-cancel')
});
