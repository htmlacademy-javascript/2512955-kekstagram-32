const PHOTOS_COUNT = 25;
const COMMENTATOR_AVATAR_COUNT = 6;
const PHOTO_LIKES_MINIMUM = 15;
const PHOTO_LIKES_MAXIMUM = 200;
const MAX_COMMENTS_IN_ONE_POST = 30;
const MAX_COMMENT_ID = PHOTOS_COUNT * MAX_COMMENTS_IN_ONE_POST;

const AVATAR_STUBS_SOURCES = Array.from(
  { length: COMMENTATOR_AVATAR_COUNT },
  (_, index) => `img/avatar-${index + 1}.svg`
);

const PHOTO_STUBS_DESCRIPTIONS = [
  'Озеро, пляж, ТУЧА ЛЕЖАКОВ!',
  'Аутентичный указатель пути к пляжу.',
  'Море, солнце, белый песок (хочу туда).',
  'А вот и наш фотограф в полном вооружении!',
  'Веселые человечки из риса купаются в супе',
  'Такси бизнес-класса.',
  'Обед нашего фотографа.',
  'Чудесные прохладительные напитки.',
  'Прилетела гуманитарная помощь.',
  'Ноги устали, ходим босиком!',
  'А где указательный камень???',
  'Машина нашего великолепного фотографа.',
  'Великолепный салат! Ничего лишнего.',
  'А вот и суши из кота))',
  'На улице +30, а он в ботинках!!',
  'Великолепный вид с высоты 3000 метров!',
  'Хоровое пение, живая музыка. Потрясающе!',
  'Чудесный экземпляр на выставке ретро-автомобилей.',
  'Кто стучится в шкаф ко мне??',
  'Бедные лысые пальмы((',
  'Я не знаю что это, но как же это вкусно!!!',
  'Закат в последний день чудесного отпуска...',
  'Отпустить или пожарить?',
  'Спасибо RAMMSTEIN! (надеюсь это они)',
  'Марс атакует!!'
];

const PHOTO_STUBS = Array.from(
  { length: PHOTOS_COUNT },
  (_, index) => ({
    url: `photos/${index + 1}.jpg`,
    description: PHOTO_STUBS_DESCRIPTIONS[index]
  })
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

const getRandomIntegerInInterval = (intervalBegin, intervalEnd) => {
  const isCorrectParams = !isNaN(intervalBegin) && !isNaN(intervalEnd);

  if (isCorrectParams) {
    const minValue = Math.ceil(Math.min(intervalBegin, intervalEnd));
    const maxValue = Math.floor(Math.max(intervalBegin, intervalEnd));
    const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    return result;
  }

  throw new Error(`Arguments 'intervalBegin (${intervalBegin})' or 'intervalEnd (${intervalEnd})' not a numbers!`);
};

const getRandomItemInArray = (source) => {
  if (Array.isArray(source)) {
    const itemIndex = getRandomIntegerInInterval(0, source.length - 1);
    return source[itemIndex];
  }

  throw new Error('source argument not array!');
};

const createUniqueNumberInIntervalGenerator = (intervalBegin, intervalEnd) => {
  const isCorrectParams = Number.isInteger(intervalBegin) && Number.isInteger(intervalEnd);

  if (isCorrectParams) {
    const minValue = Math.min(intervalBegin, intervalEnd);
    const maxValue = Math.max(intervalBegin, intervalEnd);
    const allValuesCount = Math.abs(maxValue - minValue + 1);
    const usedValuesStore = [];

    return () => {
      if (usedValuesStore.length < allValuesCount) {
        let newValue = getRandomIntegerInInterval(minValue, maxValue);

        while (usedValuesStore.includes(newValue)) {
          newValue = getRandomIntegerInInterval(intervalBegin, intervalEnd);
        }

        usedValuesStore.push(newValue);

        return newValue;
      }

      throw new Error('All possible values ​​are used!');
    };
  }

  throw new Error(`Invalid type by arguments 'intervalBegin (${intervalBegin})' or 'intervalEnd (${intervalEnd})'`);
};

const generatePostStubId = createUniqueNumberInIntervalGenerator(1, PHOTOS_COUNT);

const getUniquePhotoStubId = createUniqueNumberInIntervalGenerator(0, PHOTOS_COUNT - 1);

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

const generatePostCommentStub = () => ({
  id: generateUniqueCommentStubId(),
  avatar: getRandomItemInArray(AVATAR_STUBS_SOURCES),
  message: generateCommentMessageStub(),
  name: getRandomItemInArray(COMMENTATOR_STUBS_NAMES),
});

const generatePostStub = () => {
  const photoStub = PHOTO_STUBS[getUniquePhotoStubId()];
  const commentsCount = getRandomIntegerInInterval(0, MAX_COMMENTS_IN_ONE_POST);
  return {
    id: generatePostStubId(),
    likes: getRandomIntegerInInterval(PHOTO_LIKES_MINIMUM, PHOTO_LIKES_MAXIMUM),
    comments: Array.from(
      { length: commentsCount },
      generatePostCommentStub
    ),
    ...photoStub,
  };
};

const generatePostsListStub = () => Array.from({ length: PHOTOS_COUNT }, generatePostStub);

generatePostsListStub();
