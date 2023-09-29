import getFloor from '../utils/getFloor.mjs';

export default function pattern15(n) {
  if (n % 2 === 0 || n < 0 || !Number.isInteger(n))
    throw new Error('n must be odd positive integer');
  let result = '';
  let sp = getFloor(n / 2);
  let st = 1;
  let val = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sp; j++) {
      result += ' \t';
    }
    let cVal = val;
    for (let j = 1; j <= st; j++) {
      result += `${cVal}\t`;
      if (cVal <= getFloor(st / 2)) {
        cVal++;
      } else {
        cVal--;
      }
    }
    if (i <= getFloor(n / 2)) {
      val += 1;
      sp -= 1;
      st += 2;
    } else {
      val -= 1;
      sp += 1;
      st -= 2;
    }
    result += '\n';
  }

  return result;
}
