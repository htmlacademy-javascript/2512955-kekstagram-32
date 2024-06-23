function isCorrectLengthByString(value, maxLength) {
  const isCorrectParams = typeof(value) === 'string' && Number.isInteger(maxLength);
  return isCorrectParams
    ? value.length <= maxLength
    : undefined;
}

// Строка короче 20 символов
isCorrectLengthByString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isCorrectLengthByString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isCorrectLengthByString('проверяемая строка', 10); // false
// Максимальная длина отрицательна
isCorrectLengthByString('проверяемая строка', -1); //false;
// Проверяемый аргумент не строка
isCorrectLengthByString(123, 1); //undefined;
// Максимальная длина не целое число
isCorrectLengthByString('проверяемая строка', 1.5); //undefined;
// Максимальная длина не число
isCorrectLengthByString('проверяемая строка', 'ss'); //undefined;

function revertString(value) {
  let result = '';

  for(let letterIndex = value.length - 1; letterIndex >= 0; letterIndex--) {
    result += value[letterIndex];
  }

  return result;
}

function isPalindrom(value) {
  const isCorrectParams = typeof(value) === 'string' || !isNaN(value);

  if (isCorrectParams) {
    const castedValue = `${value}`
      .toUpperCase()
      .replaceAll(' ', '');

    const revertedValue = revertString(castedValue);
    return revertedValue === castedValue;
  }
}

// Стока палиндром
isPalindrom('12321'); //true
// Не строка и не число
isPalindrom({test: 1}); //undefined
// Регистронезависимый палиндром
isPalindrom(' rr Rr '); //true;
// Один символ
isPalindrom('a'); //true
// Одна цифра
isPalindrom(1); //true
// Стока не палиндром
isPalindrom('ab'); //false
// Число не палиндром
isPalindrom(12); //false
// Дробное число палиндром
isPalindrom(12.21); //true
// Дробное число не палиндром
isPalindrom(12.33);

function getInteger(source) {
  const pattern = /\d{1}/g;
  const stringSource = String(source);
  const matches = [...stringSource.matchAll(pattern)];

  if (matches?.length > 0) {
    const digits = matches.reduce((acc, current) => acc + current, '');
    return parseInt(digits, 10);
  }

  return NaN;
}

// Цифры в начале строки
getInteger('2023 год');//2023
// Цифры в конце строки
getInteger('ECMAScript 2022');//2022
// Цифры разбросаны
getInteger('1 кефир, 0.5 батона');//105
// Цифры в конце строки начинаются с 0
getInteger('агент 007');//7
// Строка без цифр
getInteger('а я томат');//NaN
// Число
getInteger(2023);//2023
// Отрицательное число
getInteger(-1);//1
// Дробное число
getInteger(1.5);//15
// Объект
getInteger({test: 1});//NaN

