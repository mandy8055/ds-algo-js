import getFloor from '../utils/getFloor.mjs';

export default function pattern13(n) {
  if (n < 0) {
    throw new Error('n has to be odd');
  }
  let result = '';
  for (let i = 0; i < n; i++) {
    let icj = 1;
    for (let j = 0; j <= i; j++) {
      result += `${icj}\t`;
      icj = getFloor((icj * (i - j)) / (j + 1)); // C(i, j + 1) BInomial expansion
    }
    result += '\n';
  }

  return result;
}
