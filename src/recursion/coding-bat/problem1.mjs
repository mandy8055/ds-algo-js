export default function factorial(n) {
  // edge case
  if (n < 0) {
    throw new Error('invalid input');
  }
  // base case
  if (n === 0) {
    return 1;
  }
  // Main case
  return n * factorial(n - 1);
}
