import { MAX_COMMENT_ID } from '../constants';
import {
  randomTools,
  numberGeneratorTools
} from '../../../utills';
import {
  AVATAR_STUBS_SOURCES,
  COMMENT_STUBS_MESSAGES,
  COMMENTATOR_STUBS_NAMES
} from './mocks';

const { getRandomItemInArray } = randomTools;
const { createUniqueNumberInIntervalGenerator } = numberGeneratorTools;

const generateUniqueCommentStubId = createUniqueNumberInIntervalGenerator(1, MAX_COMMENT_ID);

const generateCommentMessageStub = () => {
  const commentSentencesCount = Math.round(Math.random()) + 1;
  const sencences = [];

  //узкое место - может быть 2 одинаковых предложения в комментарии
  //но так как это стабы - думаю простительно
  for (let sentenceNumber = 0; sentenceNumber < commentSentencesCount; sentenceNumber++) {
    sencences.push(getRandomItemInArray(COMMENT_STUBS_MESSAGES));
  }

  return sencences.join('\n');
};

export const generatePostCommentStub = () => ({
  id: generateUniqueCommentStubId(),
  avatar: getRandomItemInArray(AVATAR_STUBS_SOURCES),
  message: generateCommentMessageStub(),
  name: getRandomItemInArray(COMMENTATOR_STUBS_NAMES),
});

export const generatePostCommentsListStub = (count) => Array.from({ length: count }, generatePostCommentStub);
