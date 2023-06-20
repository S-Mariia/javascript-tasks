// factorial

const getFactorial = function (n) {
  if (typeof n !== "number") return "Enter a number";
  if (n < 0) return "Enter a positive integer";
  if (Math.floor(n) !== n) return "Enter a positive integer";
  if (n === 0) return 1;

  const calcFactorial = function (number) {
    return number > 1 ? number * calcFactorial(number - 1) : 1;
  };

  return calcFactorial(n);
};

console.log(getFactorial(5));
console.log(getFactorial(4));
