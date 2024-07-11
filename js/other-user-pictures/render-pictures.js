export const renderPictureList = (root, pictureListElements) => {
  const isCorrectPictureList = Array.isArray(pictureListElements)
    && pictureListElements.every((current) => current.classList.contains('picture') && current.tagName === 'A');

  const isCorrectParams = root instanceof HTMLElement && isCorrectPictureList;

  if (isCorrectParams) {
    const picturesFragment = document.createDocumentFragment();

    pictureListElements.forEach((current) => {
      picturesFragment.appendChild(current);
    });

    root.appendChild(picturesFragment);

    return;
  }

  throw new Error('Invalid arguments');
};
