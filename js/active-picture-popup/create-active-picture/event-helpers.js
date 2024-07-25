import {
  htmlTools,
  cssTools,
} from '../../utills';

const { toggleHiddenClassInElement } = cssTools;
const { fillHtmlElement } = htmlTools;

export const toggleHiddenClassInCommentsTotalAndLoader = (root, isHidden = false) => {
  const commentTotalElement = root.querySelector('.social__comment-count');
  const commentLoaderElement = root.querySelector('.social__comments-loader');
  toggleHiddenClassInElement(commentTotalElement, isHidden);
  toggleHiddenClassInElement(commentLoaderElement, isHidden);
};

export const loadComments = (root, renderListCallback) => {
  renderListCallback();

  fillHtmlElement(
    root.querySelector('.social__comment-shown-count'),
    {
      textContent: root.querySelectorAll('.social__comment').length,
    }
  );
};
