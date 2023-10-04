export default function bunnyEars2(bunnies) {
  // Edge case
  if (bunnies < 0) {
    throw new Error('Invalid input');
  }
  // base case
  if (bunnies === 0) {
    return 0;
  }
  // Main case
  const temp = bunnies % 2 === 0 ? 3 : 2;
  return temp + bunnyEars2(bunnies - 1);
}
