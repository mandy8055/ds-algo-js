export default function printFibonacciTillN(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      result.push(i);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}
