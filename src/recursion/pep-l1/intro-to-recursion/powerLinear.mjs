export default function powerLinear(x, n) {
  // base case
  if (n === 0) {
    return 1;
  }
  // faith
  return x * powerLinear(x, n - 1);
}
