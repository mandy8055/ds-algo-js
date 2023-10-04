export default function count7(n) {
  // base case
  if (n === 0) {
    return n;
  }
  // main case
  const temp = n % 10 === 7 ? 1 : 0;
  return temp + count7(Math.floor(n / 10));
}
