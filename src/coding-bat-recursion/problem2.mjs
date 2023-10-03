export default function bunnyEars(n) {
  // base case
  if (n === 0) {
    return 0;
  }
  // main case
  return 2 + bunnyEars(n - 1);
}
