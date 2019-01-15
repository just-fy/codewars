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