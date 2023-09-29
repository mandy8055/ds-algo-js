import printFibonacciTillN from '../getting-started/print-fibo-till-n.mjs';
import getFloor from '../utils/getFloor.mjs';

export default function pattern12(n) {
  if (n <= 0) {
    throw new Error('Invalid input');
  }
  let result = '';
  const fiboSeries = printFibonacciTillN(getFloor((n * (n + 1)) / 2));
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += fiboSeries[count++] + '\t';
    }
    result += '\n';
  }
  return result;
}
