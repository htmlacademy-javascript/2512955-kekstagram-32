import { SCALE_CONFIG } from './configure/settings';

const { DEFAULT_SCALE } = SCALE_CONFIG;

const styleState = {
  scale: DEFAULT_SCALE,
  filter: null,
};

const getScaleStyle = (scalePercent) => {
  if (typeof(scalePercent) === 'number') {
    return `transform: scale(${(scalePercent / 100).toFixed(2)});`;
  }
};

const applyStylesInPicture = (picture) => {
  let styleExpression = getScaleStyle(styleState.scale);

  if (styleState.filter) {
    const filterStyle = `filter: ${ styleState.filter };`;
    styleExpression += styleExpression ? ` ${filterStyle}` : filterStyle;
  }

  picture.style = styleExpression ? styleExpression : null;
};

export const dispatchScale = (picture, scale) => {
  styleState.scale = scale ?? DEFAULT_SCALE;
  applyStylesInPicture(picture);
};

export const dispatchFilter = (picture, filter) => {
  styleState.filter = filter ? filter : null;
  applyStylesInPicture(picture);
};
