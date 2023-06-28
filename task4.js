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

// get Fibonacci sequense

const getFibonacciSequence = (n) => {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  const sequence = [1, 1];
  for (let i = 2; i < n; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

console.log(getFibonacciSequence(5));

// get Fibonacci sequense (recursion)
const getFibonacciSequenceRec = (n) => {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  const sequence = [1, 1];

  const buildSequence = (num) => {
    sequence.push(sequence[n - num - 2] + sequence[n - num - 1]);
    return num < 3 ? sequence : buildSequence(num - 1);
  };

  buildSequence(n - 2);
  return sequence;
};

console.log(getFibonacciSequenceRec(8));
