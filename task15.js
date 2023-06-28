// check if number is Prime

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrime(13));

function getPrimes(start, finish) {
  const result = [];
  for (let i = start; i <= finish; i += 1) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(getPrimes(1, 7));
