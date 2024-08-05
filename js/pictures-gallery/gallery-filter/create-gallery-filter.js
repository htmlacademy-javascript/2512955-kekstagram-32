import { setOnFilterChangeEvent } from './filter-change-event';

export const createGalleryFilter = ({
  rootElement,
  onFilterChangeCallback,
  galleryData
}) => {
  const isCorrectParams = rootElement instanceof HTMLElement && typeof(onFilterChangeCallback) === 'function' && Array.isArray(galleryData);

  if (isCorrectParams) {
    setOnFilterChangeEvent({
      data: galleryData,
      onFilterChangeCallback,
      rootElement
    });

    rootElement.classList.remove('img-filters--inactive');
    return;
  }

  throw new Error('Invalid arguments');
};
