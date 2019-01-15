// Given an integer n, find two integers a and b such that:

// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.

const digitSum = n => [...n.toString()].map(n => Number(n)).reduce((a, b) => a + b);
const solve = n => {
  if (n < 0) {
    console.log('n should be greater than zero');
    return false;
  }
  const pow = n.toString().length - 1;
  const maxNines = Math.pow(10, pow) - 1;
  const rest = n - maxNines;

  return digitSum(maxNines) + digitSum(rest);
};