import getFloor from '../utils/getFloor.mjs';

export default function pattern10(n) {
  let result = '';
  if (n % 2 === 0 || n < 0 || !Number.isInteger(n)) {
    throw new Error('n has to be odd positive integer.');
  }

  let innerSp = -1;
  let outerSp = getFloor(n / 2);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= outerSp; j++) {
      result += ' \t';
    }
    result += '*\t';
    for (let j = 1; j <= innerSp; j++) {
      result += ' \t';
    }
    if (!(i === 1 || i === n)) {
      result += '*\t';
    }
    if (i <= getFloor(n / 2)) {
      outerSp--;
      innerSp += 2;
    } else {
      outerSp++;
      innerSp -= 2;
    }
    result += '\n';
  }

  return result;
}
