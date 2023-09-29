import getFloor from '../utils/getFloor.mjs';

export default function reverseNumber(n) {
  let temp = n;
  temp = Math.abs(temp);
  let rev = 0;
  while (temp > 0) {
    const rem = temp % 10;
    rev = rev * 10 + rem;
    temp = getFloor(temp / 10);
  }
  return n < 0 ? -rev : rev;
}
