import greaterInThree from '../utils/greater-in-three.mjs';

export default function isPythagoreanTriplet(a, b, c) {
  // Edge case
  if (a < 0 || b < 0 || c < 0) return false;

  const hyp = greaterInThree(a, b, c);
  if (hyp === a) {
    return a * a === b * b + c * c;
  } else if (hyp === b) {
    return b * b === a * a + c * c;
  } else {
    return c * c === a * a + b * b;
  }
}
