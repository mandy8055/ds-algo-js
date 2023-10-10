export default function maxInArray(arr, idx = 0) {
  // base case
  if (idx === arr.length - 1) {
    return arr[idx];
  }
  // main case
  const misa = maxInArray(arr, idx + 1);
  return Math.max(misa, arr[idx]);
}
