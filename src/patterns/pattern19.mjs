import getFloor from '../utils/getFloor.mjs';

export default function pattern19(n) {
  if (n % 2 === 0) throw new Error('n must be odd');
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1) {
        if (j <= getFloor(n / 2) + 1 || j === n) {
          result += '*\t';
        } else {
          result += '\t';
        }
      } else if (i <= getFloor(n / 2)) {
        if (j === getFloor(n / 2) + 1 || j === n) {
          result += '*\t';
        } else {
          result += '\t';
        }
      } else if (i === getFloor(n / 2) + 1) {
        result += '*\t';
      } else if (i < n) {
        if (j === getFloor(n / 2) + 1 || j === 1) {
          result += '*\t';
        } else {
          result += '\t';
        }
      } else {
        if (j >= getFloor(n / 2) + 1 || j === 1) {
          result += '*\t';
        } else {
          result += '\t';
        }
      }
    }
    result += '\n';
  }

  return result;
}
