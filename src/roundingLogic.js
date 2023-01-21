export const extractHundreds = (number) => {
  const hundreds = Math.floor(number / 100);
  return hundreds;
};

export const extractTens = (number) => {
  const tens = Math.floor(number / 10);
  return tens;
};

export const extractSingles = (number) => {
  const singles = Math.floor(number / 1);
  return singles;
};

export const roundToTwoPointFive = (number) => {
  let input = number;
  const result = [];

  if (extractHundreds(input) < 1) {
  } else {
    result.push(extractHundreds(input));
    input = input - extractHundreds(input) * 100;
  }

  if (extractTens(input) < 1) {
    result.push(extractTens(input));
  } else {
    result.push(extractTens(input));
    input = input - extractTens(input) * 10;
  }

  //rounding to 2.5
  if (input > 0 && input < 1.25) {
    input = 0;
  } else if (input >= 1.25 && input < 3.75) {
    input = 2.5;
  } else if (input >= 3.75 && input < 6.25) {
    input = 5;
  } else if (input >= 6.25 && input < 8.75) {
    input = 7.5;
  } else {
    input = 10;
  }

  result.push(input);
  return parseFloat(result.join(""));
};
