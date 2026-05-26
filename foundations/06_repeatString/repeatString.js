const repeatString = function (str, numOfReps) {
  if (numOfReps < 0) {
    return "ERROR";
  }
  let returnedString = "";
  for (let i = 0; i < numOfReps; i++) {
    returnedString = returnedString + str;
  }
  return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
