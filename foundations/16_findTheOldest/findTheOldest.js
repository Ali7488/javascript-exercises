const findTheOldest = function (arr) {
  const date = new Date();
  const year = date.getFullYear();

  let oldestPerson = arr.reduce((oldest, next) => {
    let oldestAge = (oldest.yearOfDeath || year) - oldest.yearOfBirth;
    let nextAge = (next.yearOfDeath || year) - next.yearOfBirth;

    return oldestAge < nextAge ? next : oldest;
  }, arr[0]);

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
