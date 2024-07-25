import { getSliderSettings } from './slider-settings';
import { createSliderUpdateEvent } from './slider-update';
import { SLIDER_CONFIG } from '../settings';
import { cssTools } from '../../../utills';

const { SLIDER_EFFECT_SETTINGS } = SLIDER_CONFIG;
const { toggleHiddenClassInElement } = cssTools;

const isChosenEffectRadioElement = (element) => element instanceof HTMLInputElement
  && element.type === 'radio'
  && element.closest('.effects__item')
  && element?.checked;

export const configureFilterSliderEvents = (newPictureForm) => {
  const defaultSliderSettings = {...SLIDER_EFFECT_SETTINGS.CHROME };
  const sliderContainerElement = newPictureForm.querySelector('.img-upload__effect-level');
  const sliderRootElement = sliderContainerElement.querySelector('.effect-level__slider');
  const effectsListElement = newPictureForm.querySelector('.img-upload__effects');
  const originalStylesInput = newPictureForm.querySelector('#effect-none');
  const slider = noUiSlider.create(sliderRootElement, defaultSliderSettings);

  const sliderUpdateEvent = createSliderUpdateEvent(
    newPictureForm.querySelectorAll('.effects__radio'),
    newPictureForm.querySelector('.effect-level__value'),
    newPictureForm.querySelector('.img-upload__preview').querySelector('img')
  );

  slider.on('update', sliderUpdateEvent);
  originalStylesInput.checked = true;
  sliderContainerElement.classList.add('hidden');

  const onEffectClick = (event) => {
    if (isChosenEffectRadioElement(event.target)) {
      const effectElement = event.target;
      const sliderSettings = getSliderSettings(effectElement.value);
      slider.updateOptions(sliderSettings);
      toggleHiddenClassInElement(sliderContainerElement, originalStylesInput.checked);
    }
  };

  const setFilterSliderEvents = () => {
    effectsListElement.addEventListener('click', onEffectClick);
  };

  const removeFilterSliderEvents = () => {
    slider.destroy();
    effectsListElement.removeEventListener('click', onEffectClick);
  };

  return {
    set: setFilterSliderEvents,
    remove: removeFilterSliderEvents
  };
};
