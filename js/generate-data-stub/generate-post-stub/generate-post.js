import {
  PHOTOS_COUNT,
  MAX_COMMENTS_IN_ONE_POST,
  PHOTO_LIKES_MAXIMUM,
  PHOTO_LIKES_MINIMUM,
} from './constants';
import {
  numberGeneratorTools,
  randomTools,
} from '../../utills';
import { generatePostCommentsListStub } from './generate-comment';

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
