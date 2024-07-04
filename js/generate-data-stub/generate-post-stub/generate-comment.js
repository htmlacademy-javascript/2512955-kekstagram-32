import {
  COMMENTATOR_AVATAR_COUNT,
  MAX_COMMENT_ID
} from './constants';
import {
  randomTools,
  numberGeneratorTools
} from '../../utills';

const { getRandomItemInArray } = randomTools;
const { createUniqueNumberInIntervalGenerator } = numberGeneratorTools;

const AVATAR_STUBS_SOURCES = Array.from(
  { length: COMMENTATOR_AVATAR_COUNT },
  (_, index) => `img/avatar-${index + 1}.svg`
);

const COMMENTATOR_STUBS_NAMES = [
  'Виктор',
  'Мария',
  'Дмитрий',
  'Ольга',
  'Андрей',
  'Анастасия'
];

const COMMENT_STUBS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

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
