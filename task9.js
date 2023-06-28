//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

//You must not use any built-in exponent function or operator.

//For example, do not use pow(x, 0.5) or x ** 0.5.

const mySqrt = function (x) {
  if (x === 0) return 0;
  for (let i = 1; i <= x; i += 1) {
    if (i * i === x) return i;
    if (i * i > x) return i - 1;
  }
};

console.log(mySqrt(18));

// interesting solution
const mySqrt2 = function (x) {
  if (x < 2) return x;
  let result = 0;
  let start = 1;
  let end = x / 2;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let sqr = mid * mid;
    if (sqr == x) return mid;
    else if (sqr < x) {
      start = mid + 1;
      result = mid;
    } else end = mid - 1;
  }

  return result;
};

console.log(mySqrt2(18));
