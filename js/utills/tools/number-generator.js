import { getRandomIntegerInInterval } from './random';

const createUniqueNumberInIntervalGenerator = (intervalBegin, intervalEnd) => {
  const isCorrectParams = Number.isInteger(intervalBegin) && Number.isInteger(intervalEnd);

  if (isCorrectParams) {
    const minValue = Math.min(intervalBegin, intervalEnd);
    const maxValue = Math.max(intervalBegin, intervalEnd);
    const allValuesCount = Math.abs(maxValue - minValue + 1);
    const usedValuesStore = [];

    return () => {
      if (usedValuesStore.length < allValuesCount) {
        let newValue = getRandomIntegerInInterval(minValue, maxValue);

        while (usedValuesStore.includes(newValue)) {
          newValue = getRandomIntegerInInterval(intervalBegin, intervalEnd);
        }

        usedValuesStore.push(newValue);

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
