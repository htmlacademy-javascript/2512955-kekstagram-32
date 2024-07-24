import {
  htmlTools,
  cssTools,
} from '../../utills';

export const toggleHiddenClassInCommentsTotalAndLoader = (root, isHidden = false) => {
  const commentTotalElement = root.querySelector('.social__comment-count');
  const commentLoaderElement = root.querySelector('.social__comments-loader');
  cssTools.toggleHiddenClassInElement(commentTotalElement, isHidden);
  cssTools.toggleHiddenClassInElement(commentLoaderElement, isHidden);
};

export const loadComments = (root, renderListCallback) => {
  renderListCallback();

  htmlTools.fillHtmlElement(
    root.querySelector('.social__comment-shown-count'),
    {
      textContent: root.querySelectorAll('.social__comment').length,
    }
  );
};
