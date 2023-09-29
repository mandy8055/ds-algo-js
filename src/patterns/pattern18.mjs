import getFloor from '../utils/getFloor.mjs';

export default function pattern18(n) {
  if (n % 2 === 0) throw new Error('n must be odd');
  let result = '';
  let sp = 0,
    st = n;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sp; j++) {
      result += '\t';
    }
    for (let j = 1; j <= st; j++) {
      if (i > 1 && i <= getFloor(n / 2) && j > 1 && j < st) {
        result += '\t';
      } else {
        result += '*\t';
      }
    }

    if (i <= getFloor(n / 2)) {
      sp += 1;
      st -= 2;
    } else {
      sp -= 1;
      st += 2;
    }
    result += '\n';
  }
  return result;
}
