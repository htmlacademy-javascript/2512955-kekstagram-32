import { SLIDER_CONFIG } from '../settings';

const { SLIDER_EFFECT_SETTINGS, EFFECT_TYPES } = SLIDER_CONFIG;

export const getSliderSettings = (effectType) => {
  switch (effectType) {
    case EFFECT_TYPES.SEPIA: {
      return SLIDER_EFFECT_SETTINGS.SEPIA;
    }
    case EFFECT_TYPES.MARWIN: {
      return SLIDER_EFFECT_SETTINGS.MARWIN;
    }
    case EFFECT_TYPES.PHOBOS: {
      return SLIDER_EFFECT_SETTINGS.PHOBOS;
    }
    case EFFECT_TYPES.COLD: {
      return SLIDER_EFFECT_SETTINGS.COLD;
    }
    default: {
      return SLIDER_EFFECT_SETTINGS.CHROME;
    }
  }
};
