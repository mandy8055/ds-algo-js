import getFloor from '../utils/getFloor.mjs';

export default function pattern5(n) {
  if (n % 2 === 0) {
    return 'n must be odd';
  }
  let result = '';
  let stars = 1;
  let spaces = getFloor(n / 2);

  for (let i = 1; i <= n; i++) {
    for (let j = spaces; j >= 1; j--) {
      result += ' \t';
    }

    for (let k = 1; k <= stars; k++) {
      result += '*\t';
    }
    if (i <= getFloor(n / 2)) {
      spaces -= 1;
      stars += 2;
    } else {
      spaces += 1;
      stars -= 2;
    }
    result += '\n';
  }

  return result;
}
