/**
1. You are given two numbers n and k. You are required to rotate n, k times to the right. If k is positive, rotate to the right i.e. remove rightmost digit and make it leftmost. Do the reverse for negative value of k. Also k can have an absolute value larger than number of digits in n.
2. Take as input n and k.
3. Print the rotated number.
4. Note - Assume that the number of rotations will not cause leading 0's in the result. e.g. such an input will not be given
   n = 12340056
   k = 3
   r = 05612340
 */

import getFloor from '../utils/getFloor.mjs';
import countDigitsInN from './count-digits-in-n.mjs';

export default function rotateANumber(n, k) {
  let rotated = 0;

  // Count the number of digits
  const count = countDigitsInN(n);
  k %= count;
  if (k < 0) {
    k += count;
  }
  const divisor = 10 ** k;
  const rem = n % divisor;
  rotated = rem * 10 ** (count - k) + getFloor(n / divisor);

  return rotated;
}
