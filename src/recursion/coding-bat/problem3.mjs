export default function fibonacci(n) {
  // edge case
  if (n < 0) {
    throw new Error('Invalid input');
  }
  // base case
  if (n === 0 || n === 1) {
    return n;
  }
  // Main case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
