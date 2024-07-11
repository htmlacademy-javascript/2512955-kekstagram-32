import {
  getRandomIntegerInInterval,
  getRandomItemInArray
} from './tools/random';
import {
  createUniqueNumberInIntervalGenerator
} from './tools/number-generator';
import {
  getHtmlTemplate,
  fillHtmlElement
} from './tools/html';

const randomTools = {
  getRandomIntegerInInterval,
  getRandomItemInArray
};

const numberGeneratorTools = {
  createUniqueNumberInIntervalGenerator
};

const htmlTools = {
  getHtmlTemplate,
  fillHtmlElement
};

export {
  randomTools,
  numberGeneratorTools,
  htmlTools
};
