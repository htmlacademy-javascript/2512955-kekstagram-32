import { SLIDER_CONFIG } from '../settings';
import { dispatchFilter } from '../../picture-style';
import { createPictureFilter } from './create-picture-filter';
import { htmlTools } from '../../../utills';

const { EffectTypes } = SLIDER_CONFIG;
const { setInputValue } = htmlTools;

export const createSliderUpdateEvent = (filterRadioElements, valueInput, pictureElement) => {
  const radioElementsArray = [...filterRadioElements];
  return (values) => {
    const checkedRadiodElement = radioElementsArray.find((current) => current.checked);
    const sliderValue = values[0];

    if (checkedRadiodElement.value === EffectTypes.NONE) {
      setInputValue(valueInput, null);
      dispatchFilter(pictureElement, null);
      return;
    }

    const pictureFilter = createPictureFilter(checkedRadiodElement.value, sliderValue);
    dispatchFilter(pictureElement, pictureFilter);
    setInputValue(valueInput, sliderValue);
  };
};
