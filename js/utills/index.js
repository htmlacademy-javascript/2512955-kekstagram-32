import {
  getRandomIntegerInInterval,
  getRandomItemInArray
} from './tools/random';
import {
  createUniqueNumberInIntervalGenerator
} from './tools/number-generator';
import {
  getHtmlTemplate,
  fillHtmlElement,
  renderHtmlElement,
  createHtmlElement,
} from './tools/html';
import {
  isEscapeKey
} from './tools/keyboard';
import {
  ENCTYPES,
  QUERY_TYPES,
  setFormAttributes
} from './tools/form';
import {
  toggleHiddenClassInElement
} from './tools/css';

const randomTools = {
  getRandomIntegerInInterval,
  getRandomItemInArray
};

const numberGeneratorTools = {
  createUniqueNumberInIntervalGenerator
};

const htmlTools = {
  getHtmlTemplate,
  fillHtmlElement,
  renderHtmlElement,
  createHtmlElement
};

const keyboardTools = {
  isEscapeKey
};

const formTools = {
  ENCTYPES,
  QUERY_TYPES,
  setFormAttributes
};

const cssTools = {
  toggleHiddenClassInElement
};

export {
  randomTools,
  numberGeneratorTools,
  htmlTools,
  keyboardTools,
  formTools,
  cssTools,
};
