import { numberGeneratorTools } from '../../utills';

const { createUniqueNumberInIntervalGenerator } = numberGeneratorTools;
const RANDOM_FILTER_ITEMS_COUNT = 10;

export const FilterTypes = {
  DEFAULT: 'filter-default',
  MOST_POPULAR: 'filter-discussed',
  RANDOM: 'filter-random',
};

export const defaultFilter = (data) => data;

export const randomFilter = (data) => {
  const getNextItemIndex = createUniqueNumberInIntervalGenerator(0, data.length - 1);
  const filteredData = [];

  for (let dataIndex = 0; dataIndex < RANDOM_FILTER_ITEMS_COUNT; dataIndex++) {
    filteredData.push(data[getNextItemIndex()]);
  }

  return filteredData;
};

export const mostPopularFilter = (data) => {
  const dataCopy = data.slice();

  return dataCopy.sort((firstItem, secondItem) => {
    const firstItemCommentsCount = firstItem?.comments?.length ?? 0;
    const secondItemCommentsCount = secondItem?.comments?.length ?? 0;

    return secondItemCommentsCount - firstItemCommentsCount;
  });
};
