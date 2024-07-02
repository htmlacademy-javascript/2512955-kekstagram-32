const getRandomIntegerInInterval = (intervalBegin, intervalEnd) => {
  const isCorrectParams = !isNaN(intervalBegin) && !isNaN(intervalEnd);

  if (isCorrectParams) {
    const minValue = Math.ceil(Math.min(intervalBegin, intervalEnd));
    const maxValue = Math.floor(Math.max(intervalBegin, intervalEnd));
    const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    return result;
  }

  throw new Error(`Arguments 'intervalBegin (${intervalBegin})' or 'intervalEnd (${intervalEnd})' not a numbers!`);
};

const getRandomItemInArray = (source) => {
  if (Array.isArray(source)) {
    const itemIndex = getRandomIntegerInInterval(0, source.length - 1);
    return source[itemIndex];
  }

  throw new Error('source argument not array!');
};

export {
  getRandomIntegerInInterval,
  getRandomItemInArray,
};
