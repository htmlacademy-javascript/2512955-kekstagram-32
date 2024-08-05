import {
  defaultFilter,
  mostPopularFilter,
  randomFilter,
  FilterTypes
} from './filters';
import { timerTools } from '../../utills';

const ACTIVE_FILTER_SELECTOR = 'img-filters__button--active';

const { debounce } = timerTools;

const getFilter = (filterType) => {
  switch (filterType) {
    case FilterTypes.RANDOM: {
      return randomFilter;
    }
    case FilterTypes.MOST_POPULAR: {
      return mostPopularFilter;
    }
    default: {
      return defaultFilter;
    }
  }
};

export const setOnFilterChangeEvent = ({
  data,
  onFilterChangeCallback,
  rootElement,
}) => {
  const debouncedFilterChangeCallback = debounce(onFilterChangeCallback);
  const filtersForm = rootElement.querySelector('.img-filters__form');
  let activeFilterElement = rootElement.querySelector(`.${ACTIVE_FILTER_SELECTOR}`);

  const getActiveFilterType = (filterElement) => filterElement?.id ?? FilterTypes.DEFAULT;

  const applyFilterByGallery = (filterType, applyFilterCallback = debouncedFilterChangeCallback) => {
    const applyFilter = getFilter(filterType);
    const filteredData = applyFilter(data);
    applyFilterCallback(filteredData);
  };

  applyFilterByGallery(getActiveFilterType(activeFilterElement), onFilterChangeCallback);

  const onFilterChangeHandler = (event) => {
    const element = event.target;

    if (element.matches('.img-filters__button') && element.closest('.img-filters__form') && activeFilterElement !== element) {
      applyFilterByGallery(getActiveFilterType(element));
      activeFilterElement.classList.remove(ACTIVE_FILTER_SELECTOR);
      element.classList.add(ACTIVE_FILTER_SELECTOR);
      activeFilterElement = element;
    }
  };

  filtersForm.addEventListener('click', onFilterChangeHandler);
};
