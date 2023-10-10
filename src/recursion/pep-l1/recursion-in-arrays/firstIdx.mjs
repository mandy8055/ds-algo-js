export default function firstIdx(arr, x, idx = 0) {
  // base case
  if (idx === arr.length) {
    return -1;
  }
  // main case
  if (arr[idx] === x) {
    return idx;
  }
  return firstIdx(arr, x, idx + 1);
}
