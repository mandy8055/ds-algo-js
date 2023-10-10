export default function printDecreasing(n) {
  // base case
  if (n === 1) {
    return `${n}`;
  }
  // faith
  return `${n}\n${printDecreasing(n - 1)}`;
}
