const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i += 1) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    }
  }
};

fizzbuzz(19);

// second way
const fizzbuzz1 = (num) => {
  for (let i = 1; i <= num; i += 1) {
    const result =
      (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i;
    console.log(result);
  }
};
