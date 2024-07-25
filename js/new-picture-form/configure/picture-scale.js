import { NEW_PICTURE_FORM_SETTINGS } from '../../config';
import { dispatchScale } from '../picture-style';
import { htmlTools } from '../../utills';

const { SCALE_SETTINGS, DEFAULT_SCALE } = NEW_PICTURE_FORM_SETTINGS;

export const configureScaleEvents = (formElement) => {
  const smallerScaleElement = formElement.querySelector('.scale__control--smaller');
  const biggerScaleElement = formElement.querySelector('.scale__control--bigger');
  const scaleValueElement = formElement.querySelector('.scale__control--value');
  const imageElement = formElement
    .querySelector('.img-upload__preview')
    .querySelector('img');
  biggerScaleElement.disabled = true;
  htmlTools.setInputValue(scaleValueElement, `${ DEFAULT_SCALE }%`);

  const onChangeScale = (currentValue, hasIncrease = true) => {
    let newValue = hasIncrease
      ? currentValue + SCALE_SETTINGS.step
      : currentValue - SCALE_SETTINGS.step;

    if (newValue <= SCALE_SETTINGS.min) {
      smallerScaleElement.disabled = true;
      biggerScaleElement.disabled = false;
      newValue = Math.max(newValue, SCALE_SETTINGS.min);
    } else if (newValue >= SCALE_SETTINGS.max) {
      smallerScaleElement.disabled = false;
      biggerScaleElement.disabled = true;
      newValue = Math.min(newValue, SCALE_SETTINGS.max);
    } else {
      smallerScaleElement.disabled = false;
      biggerScaleElement.disabled = false;
    }

    htmlTools.setInputValue(scaleValueElement, `${newValue}%`);
    dispatchScale(imageElement, newValue);
  };

  const onSmallerScaleElementClick = () => {
    const currentValue = parseInt(scaleValueElement.value, 10);
    onChangeScale(currentValue, false);
  };

  const onBiggerScaleElementClick = () => {
    const currentValue = parseInt(scaleValueElement.value, 10);
    onChangeScale(currentValue);
  };

  const setEvents = () => {
    smallerScaleElement.addEventListener('click', onSmallerScaleElementClick);
    biggerScaleElement.addEventListener('click', onBiggerScaleElementClick);
  };

  const removeEvents = () => {
    smallerScaleElement.removeEventListener('click', onSmallerScaleElementClick);
    biggerScaleElement.removeEventListener('click', onBiggerScaleElementClick);
    htmlTools.setInputValue(scaleValueElement, `${ DEFAULT_SCALE }%`);
    dispatchScale(imageElement, DEFAULT_SCALE);
  };

  return {
    set: setEvents,
    remove: removeEvents
  };
};
