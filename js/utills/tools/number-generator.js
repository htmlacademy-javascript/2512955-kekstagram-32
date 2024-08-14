import { getRandomIntegerInInterval } from './random';

const createUniqueNumberInIntervalGenerator = (intervalBegin, intervalEnd) => {
  const isCorrectParams = Number.isInteger(intervalBegin) && Number.isInteger(intervalEnd);

  if (isCorrectParams) {
    const minValue = Math.min(intervalBegin, intervalEnd);
    const maxValue = Math.max(intervalBegin, intervalEnd);
    const allValuesCount = Math.abs(maxValue - minValue + 1);
    const usedValues = [];

    return () => {
      if (usedValues.length < allValuesCount) {
        let newValue = getRandomIntegerInInterval(minValue, maxValue);

        while (usedValues.includes(newValue)) {
          newValue = getRandomIntegerInInterval(intervalBegin, intervalEnd);
        }

        usedValues.push(newValue);

        return newValue;
      }

      throw new Error('All possible values ​​are used!');
    };
  }

  throw new Error(`Invalid type by arguments 'intervalBegin (${intervalBegin})' or 'intervalEnd (${intervalEnd})'`);
};

export {
  createUniqueNumberInIntervalGenerator
};
