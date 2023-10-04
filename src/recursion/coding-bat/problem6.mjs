export default function sumDigits(n) {
  // base case
  if (n === 0) {
    return n;
  }
  // main case
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
