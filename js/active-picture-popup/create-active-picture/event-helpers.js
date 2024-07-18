export const toggleHiddenClassInCommentsTotalAndLoader = (root, isHidden = false) => {
  const commentTotalElement = root.querySelector('.social__comment-count');
  const commentLoaderElement = root.querySelector('.social__comments-loader');

  if (isHidden) {
    commentTotalElement.classList.add('hidden');
    commentLoaderElement.classList.add('hidden');
    return;
  }

  commentTotalElement.classList.remove('hidden');
  commentLoaderElement.classList.remove('hidden');
};
