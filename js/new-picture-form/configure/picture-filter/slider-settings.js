import { SLIDER_CONFIG } from '../settings';

const { SliderEffectSettings, EffectTypes } = SLIDER_CONFIG;

export const getSliderSettings = (effectType) => {
  switch (effectType) {
    case EffectTypes.SEPIA: {
      return SliderEffectSettings.SEPIA;
    }
    case EffectTypes.MARWIN: {
      return SliderEffectSettings.MARWIN;
    }
    case EffectTypes.PHOBOS: {
      return SliderEffectSettings.PHOBOS;
    }
    case EffectTypes.COLD: {
      return SliderEffectSettings.COLD;
    }
    default: {
      return SliderEffectSettings.CHROME;
    }
  }
};
