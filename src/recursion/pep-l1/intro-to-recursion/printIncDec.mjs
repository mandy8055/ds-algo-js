export default function printIncDec(n) {
  // base case
  if (n === 1) {
    return n;
  }
  // main case
  return `${n}\n${printIncDec(n - 1)}\n${n}`;
}
