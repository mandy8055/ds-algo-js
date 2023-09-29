import getFloor from '../utils/getFloor.mjs';

export default function pattern20(n) {
  if (n % 2 === 0) {
    throw new Error('n must be odd');
  }
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (
        j === 1 ||
        j === n ||
        (i >= getFloor(n / 2) + 1 && (i === j || i + j === n + 1))
      ) {
        result += '*\t';
      } else {
        result += '\t';
      }
    }
    result += '\n';
  }

  return result;
}
