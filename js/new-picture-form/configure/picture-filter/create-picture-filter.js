import { NEW_PICTURE_FORM_SETTINGS } from '../../../config';

const { EFFECT_TYPES } = NEW_PICTURE_FORM_SETTINGS;

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
