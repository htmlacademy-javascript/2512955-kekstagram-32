import { SLIDER_CONFIG } from '../settings';

const { EFFECT_TYPES } = SLIDER_CONFIG;

export const createPictureFilter = (effectType, value) => {
  switch(effectType) {
    case EFFECT_TYPES.CHROME: {
      return `grayscale(${ value })`;
    }
    case EFFECT_TYPES.SEPIA: {
      return `sepia(${ value })`;
    }
    case EFFECT_TYPES.MARWIN: {
      return `invert(${ value }%)`;
    }
    case EFFECT_TYPES.PHOBOS: {
      return `blur(${ value }px)`;
    }
    case EFFECT_TYPES.COLD: {
      return `brightness(${ value })`;
    }
    default: {
      return null;
    }
  }
};
