import getFloor from '../utils/getFloor.mjs';

export default function pattern6(n) {
  if (n % 2 === 0) {
    throw new Error('n must be odd');
  }
  let result = '';
  let sp = 1;
  let st = Math.ceil(n / 2);
  for (let i = 1; i <= n; i++) {
    for (let j = st; j >= 1; j--) {
      result += '*\t';
    }
    for (let k = 1; k <= sp; k++) {
      result += ' \t';
    }
    for (let j = st; j >= 1; j--) {
      result += '*\t';
    }
    if (i <= getFloor(n / 2)) {
      sp += 2;
      st -= 1;
    } else {
      sp -= 2;
      st += 1;
    }
    result += '\n';
  }

  return result;
}
