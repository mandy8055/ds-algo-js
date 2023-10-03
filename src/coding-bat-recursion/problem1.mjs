export default function factorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  // Main case
  return n * factorial(n - 1);
}
