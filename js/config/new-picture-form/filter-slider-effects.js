const DEFAULT_FORMAT = {
  to: (value) => parseFloat(value.toFixed(1)),
  from: (value) => parseFloat(value).toFixed(1)
};

const CHROME_EFFECT = {
  range: {
    min: 0,
    max: 1,
  },
  connect: 'lower',
  step: 0.1,
  start: 1,
  format: DEFAULT_FORMAT
};

const SEPIA_EFFECT = {
  range: {
    min: 0,
    max: 1,
  },
  connect: 'lower',
  step: 0.1,
  start: 1,
  format: DEFAULT_FORMAT
};

const MARWIN_EFFECT = {
  range: {
    min: 0,
    max: 100,
  },
  connect: 'lower',
  step: 1,
  start: 100,
  format: {
    to: (value) => parseInt(value, 10),
    from: (value) => parseInt(value, 10)
  }
};

const PHOBOS_EFFECT = {
  range: {
    min: 0,
    max: 3,
  },
  connect: 'lower',
  step: 0.1,
  start: 3,
  format: DEFAULT_FORMAT
};

const COLD_EFFECT = {
  range: {
    min: 0,
    max: 3,
  },
  connect: 'lower',
  step: 0.1,
  start: 3,
  format: DEFAULT_FORMAT
};

export const SLIDER_EFFECT_SETTINGS = {
  CHROME: CHROME_EFFECT,
  SEPIA: SEPIA_EFFECT,
  MARWIN: MARWIN_EFFECT,
  PHOBOS: PHOBOS_EFFECT,
  COLD: COLD_EFFECT,
};

export const EFFECT_TYPES = {
  NONE: 'none',
  CHROME: 'chrome',
  MARWIN: 'marvin',
  PHOBOS: 'phobos',
  COLD: 'heat',
  SEPIA: 'sepia'
};
