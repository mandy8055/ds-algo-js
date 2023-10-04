export default function powerN(base, n) {
  // edge case
  if (n < 0) {
    throw new Error('Invalid input in context of this problem');
  }
  // base case
  if (n === 0) {
    return 1;
  }
  // main case
  return base * powerN(base, n - 1);
}
