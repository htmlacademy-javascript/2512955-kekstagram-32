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
  setInputValue
} from './tools/html';
import {
  isEscapeKey
} from './tools/keyboard';
import {
  Enctypes,
  setFormAttributes
} from './tools/form';
import {
  toggleHiddenClassInElement
} from './tools/css';
import {
  debounce,
  throttle
} from './tools/timer';

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
  createHtmlElement,
  setInputValue
};

const keyboardTools = {
  isEscapeKey
};

const formTools = {
  Enctypes,
  setFormAttributes
};

const cssTools = {
  toggleHiddenClassInElement
};

const timerTools = {
  debounce,
  throttle
};

export {
  randomTools,
  numberGeneratorTools,
  htmlTools,
  keyboardTools,
  formTools,
  cssTools,
  timerTools
};
