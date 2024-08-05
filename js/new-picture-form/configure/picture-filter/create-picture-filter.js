import { SLIDER_CONFIG } from '../settings';

const { EffectTypes } = SLIDER_CONFIG;

export const createPictureFilter = (effectType, value) => {
  switch(effectType) {
    case EffectTypes.CHROME: {
      return `grayscale(${ value })`;
    }
    case EffectTypes.SEPIA: {
      return `sepia(${ value })`;
    }
    case EffectTypes.MARWIN: {
      return `invert(${ value }%)`;
    }
    case EffectTypes.PHOBOS: {
      return `blur(${ value }px)`;
    }
    case EffectTypes.COLD: {
      return `brightness(${ value })`;
    }
    default: {
      return null;
    }
  }
};
