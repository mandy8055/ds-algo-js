import getFloor from '../utils/getFloor.mjs';

export default function countDigitsInN(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('n must be a non-negative integer');
  }
  if (n === 0) {
    return 1;
  }
  let count = 0;
  while (n > 0) {
    count++;
    n = getFloor(n / 10);
  }
  return count;
}
