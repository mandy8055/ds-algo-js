import getFloor from '../utils/getFloor.mjs';

export default function pattern17(n) {
  if (n % 2 === 0) throw new Error('n must be odd');
  let result = '';
  let sp = getFloor(n / 2);
  let st = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sp; j++) {
      if (i !== getFloor(n / 2) + 1) {
        result += '\t';
      } else {
        result += '*\t';
      }
    }
    for (let j = 1; j <= st; j++) {
      result += '*\t';
    }
    if (i <= getFloor(n / 2)) {
      st += 1;
    } else {
      st -= 1;
    }
    result += '\n';
  }
  return result;
}
