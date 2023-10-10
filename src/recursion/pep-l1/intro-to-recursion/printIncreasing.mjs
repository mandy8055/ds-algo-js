export default function printIncreasing(n) {
  // base case
  if (n === 1) {
    return `${n}`;
  }
  // faith
  return `${printIncreasing(n - 1)}\n${n}`;
}
