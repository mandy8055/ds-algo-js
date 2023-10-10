export default function lastIdx(arr, x, idx = 0) {
  // base case
  if (idx === arr.length) {
    return -1;
  }
  // main case
  const tempIdx = lastIdx(arr, x, idx + 1);
  if (arr[idx] === x && tempIdx === -1) {
    return idx;
  } else {
    return tempIdx;
  }
}
