export default function bunnyEars(n) {
  // Edge case
  if (n < 0) {
    throw new Error('invalid input');
  }
  // base case
  if (n === 0) {
    return 0;
  }
  // main case
  return 2 + bunnyEars(n - 1);
}
