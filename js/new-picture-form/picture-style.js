import { NEW_PICTURE_FORM_SETTINGS } from '../config';

const { DEFAULT_SCALE } = NEW_PICTURE_FORM_SETTINGS;

const styleState = {
  scale: DEFAULT_SCALE,
  filter: null,
};

const getScaleStyle = (scalePercent) => {
  const scaleValue = scalePercent / 100;

  return `transform: scale(${Number.isInteger(scaleValue) ? scaleValue : scaleValue.toFixed(2)})`;
};

const getFilterStyle = (filterValue) => `filter: ${filterValue}`;

const applyPictureStyleInState = (picture) => {
  let styleExpression = '';

  if (styleState.scale !== DEFAULT_SCALE || styleState.filter) {

    if (styleState.scale !== DEFAULT_SCALE) {
      styleExpression += getScaleStyle(styleState.scale);
    }

    if (styleState.filter) {
      const filterStyle = getFilterStyle(styleState.filter);
      styleExpression += styleExpression ? `, ${filterStyle}` : filterStyle;
    }
  }

  picture.style = styleExpression ? styleExpression : null;
};

export const dispatchScale = (picture, scale) => {
  styleState.scale = scale ?? DEFAULT_SCALE;
  applyPictureStyleInState(picture);
};

export const dispatchFilter = (picture, filter) => {
  styleState.filter = filter ? filter : null;
  applyPictureStyleInState(picture);
};
