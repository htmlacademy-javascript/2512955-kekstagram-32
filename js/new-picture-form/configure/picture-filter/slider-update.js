import { NEW_PICTURE_FORM_SETTINGS } from '../../../config';
import { dispatchFilter } from '../../picture-style';
import { createPictureFilter } from './create-picture-filter';

const { EFFECT_TYPES } = NEW_PICTURE_FORM_SETTINGS;

export const createSliderUpdateEvent = (filterRadioElements, valueInput, pictureElement) => {
  const radioElementsArray = [...filterRadioElements];
  return (values) => {
    const checkedRadiodElement = radioElementsArray.find((current) => current.checked);
    const sliderValue = values[0];

    if (checkedRadiodElement.value === EFFECT_TYPES.NONE) {
      valueInput.value = '';
      dispatchFilter(pictureElement, null);
      return;
    }

    const pictureFilter = createPictureFilter(checkedRadiodElement.value, sliderValue);
    dispatchFilter(pictureElement, pictureFilter);
    valueInput.value = sliderValue;
  };
};
