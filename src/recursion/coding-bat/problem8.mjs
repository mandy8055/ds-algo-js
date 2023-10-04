export default function count8(n) {
  // base case
  if (n === 0) {
    return n;
  }
  // main case
  if (n % 10 === 8) {
    if (n % 100 === 88) {
      return 2 + count8(Math.floor(n / 10));
    } else {
      return 1 + count8(Math.floor(n / 10));
    }
  } else {
    return count8(Math.floor(n / 10));
  }
}
