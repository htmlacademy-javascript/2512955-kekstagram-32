import {
  PHOTOS_COUNT,
  MAX_COMMENTS_IN_ONE_POST,
  PHOTO_LIKES_MAXIMUM,
  PHOTO_LIKES_MINIMUM,
} from '../constants';
import {
  numberGeneratorTools,
  randomTools,
} from '../../../utills';
import { generatePostCommentsListStub } from '../generate-comment/generate-comment';
import { PHOTO_STUBS } from './mocks';

const { createUniqueNumberInIntervalGenerator } = numberGeneratorTools;
const { getRandomIntegerInInterval } = randomTools;

const generateUnuquePostStubId = createUniqueNumberInIntervalGenerator(1, PHOTOS_COUNT);

const getUniquePhotoStubId = createUniqueNumberInIntervalGenerator(0, PHOTOS_COUNT - 1);

const generatePostStub = () => {
  const photoStub = PHOTO_STUBS[getUniquePhotoStubId()];
  const commentsCount = getRandomIntegerInInterval(0, MAX_COMMENTS_IN_ONE_POST);
  return {
    id: generateUnuquePostStubId(),
    likes: getRandomIntegerInInterval(PHOTO_LIKES_MINIMUM, PHOTO_LIKES_MAXIMUM),
    comments: generatePostCommentsListStub(commentsCount),
    ...photoStub,
  };
};

const generatePostsListStub = (count = PHOTOS_COUNT) => Array.from({ length: count }, generatePostStub);

export {
  generatePostStub,
  generatePostsListStub
};
