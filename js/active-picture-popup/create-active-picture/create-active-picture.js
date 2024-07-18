import {
  htmlTools
} from '../../utills';
import { Popup } from '../../shared/popup/popup';
import {
  createCommentsListRenderer
} from '../create-picture-comment';
import { toggleHiddenClassInCommentsTotalAndLoader } from './event-helpers';

const { fillHtmlElement, createHtmlElement } = htmlTools;

const rootElement = document.querySelector('.big-picture');

const onActivePicturePopupOpen = ({
  description,
  likes,
  comments,
  url
}) => {
  toggleHiddenClassInCommentsTotalAndLoader(rootElement, false);

  const renderedCommentsCountElement = rootElement.querySelector('.social__comment-shown-count');
  const commentsListElement = rootElement.querySelector('.social__comments');
  const commentsLoaderElement = rootElement.querySelector('.social__comments-loader');
  const renderCommentsList = createCommentsListRenderer(comments, commentsListElement);

  const onCommentsLoaderClick = (event) => {
    event.preventDefault();
    renderCommentsList();

    const renderedCommentsCount = commentsListElement.querySelectorAll('.social__comment').length;
    fillHtmlElement(
      renderedCommentsCountElement,
      {
        textContent: renderedCommentsCount,
      }
    );

    if (renderedCommentsCount === comments.length) {
      toggleHiddenClassInCommentsTotalAndLoader(rootElement, true);
      event.target.removeEventListener('click', onCommentsLoaderClick);
    }
  };

  commentsListElement.innerHTML = '';
  fillHtmlElement(
    rootElement.querySelector('.big-picture__img').querySelector('img'),
    {
      src: url,
      alt: description
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

  renderCommentsList();

  if (commentsListElement.children.length === comments.length) {
    toggleHiddenClassInCommentsTotalAndLoader(rootElement, true);
    commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
  }

  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

const onCloseActivePicturePopup = () => {
  const clearlyCommentsLoaderButton = createHtmlElement('button', ['social__comments-loader', 'comments-loader']);

  fillHtmlElement(
    clearlyCommentsLoaderButton,
    {
      textContent: 'Загрузить еще'
    }
  );

  const liveCommentsLoaderButton = rootElement.querySelector('.social__comments-loader');
  liveCommentsLoaderButton.remove();
  rootElement.querySelector('.social__comments').insertAdjacentElement('afterend', clearlyCommentsLoaderButton);
};

export const createActivePicturePopup = () => new Popup({
  rootElement: rootElement,
  onOpenPopupCallback: onActivePicturePopupOpen,
  onClosePopupCallback: onCloseActivePicturePopup,
  closeElement: rootElement.querySelector('#picture-cancel')
});
