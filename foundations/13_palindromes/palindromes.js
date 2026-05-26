const palindromes = function (str) {
  const parsedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = parsedStr.length - 1;

  while (left < right) {
    if (parsedStr[left] !== parsedStr[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
