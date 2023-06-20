// get Fibonacci number

// first way
const getFibonacciNumber = (n) => {
  return n > 2 ? getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2) : 1;
};

console.log(getFibonacciNumber(7));

//second way
const getFibonacciNumber2 = (n) => {
  let firstNum = 1;
  let secondNum = 1;

  for (let i = 3; i <= n; i += 1) {
    const nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
  }

  return secondNum;
};

console.log(getFibonacciNumber2(77));
