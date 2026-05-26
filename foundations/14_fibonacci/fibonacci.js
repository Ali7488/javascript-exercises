const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  return Math.round((phi ** n - psi ** n) / sqrt5);
};

// Do not edit below this line
module.exports = fibonacci;
