const modelArr = [47.13, 54.38, 61.63, 58, 54.38, 50.75];

// const actArr = [
//   (props.benchTrainingMax * 0.65).toFixed(2) + "kg x8",
//   (props.benchTrainingMax * 0.75).toFixed(2) + "kg x6",
//   (props.benchTrainingMax * 0.85).toFixed(2) + "kg x4",
//   (props.benchTrainingMax * 0.85).toFixed(2) + "kg x4",
//   (props.benchTrainingMax * 0.85).toFixed(2) + "kg x4",
//   (props.benchTrainingMax * 0.8).toFixed(2) + "kg x5",
//   (props.benchTrainingMax * 0.75).toFixed(2) + "kg x6",
//   (props.benchTrainingMax * 0.7).toFixed(2) + "kg x7",
//   (props.benchTrainingMax * 0.65).toFixed(2) + "kg x8+",
// ];

const extractHundreds = (number) => {
  const hundreds = Math.floor(number / 100);
  return hundreds;
};

const extractTens = (number) => {
  const tens = Math.floor(number / 10);
  return tens;
};

const extractSingles = (number) => {
  const singles = Math.floor(number / 1);
  return singles;
};

const joinNumbers = (inputArray) => {
  inputArray = inputArray;
  let outputNumber;
  switch (inputArray.length) {
    case 4:
      outputNumber =
        inputArray[3] +
        inputArray[2] * 10 +
        inputArray[1] * 100 +
        inputArray[0] * 1000;
    case 3:
      outputNumber = inputArray[2] + inputArray[1] * 10 + inputArray[0] * 100;
      break;
    case 2:
      outputNumber = parseFloat(inputArray[1] + inputArray[0] * 10);
      break;
    case 1:
      outputNumber = inputArray[0];
      break;
  }
  return outputNumber;
};

const splitNumber = (number) => {
  let input = number;
  // console.log( `You've passed ${number} to this function` );
  const result = [];

  if (extractHundreds(input) < 1) {
    // console.log( "This number is not in range of hundreds" )
  } else {
    result.push(extractHundreds(input));
    input = input - extractHundreds(input) * 100;
  }

  // console.log( input )

  if (extractTens(input) < 1) {
    // console.log("This number is not in range of tens")
    result.push(extractTens(input));
  } else {
    result.push(extractTens(input));
    input = input - extractTens(input) * 10;
  }

  // console.log( input )

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
  console.log(`rounded value is ${input}`);

  result.push(input);
  
  return joinNumbers(input)
};

