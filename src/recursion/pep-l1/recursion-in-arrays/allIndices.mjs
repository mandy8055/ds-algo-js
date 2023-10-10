export default function allIndices(arr, x, idx = 0) {
  // base case
  if (idx === arr.length) {
    return [];
  }
  const resArr = allIndices(arr, x, idx + 1);
  if (arr[idx] === x) {
    resArr.unshift(idx);
  }
  return resArr;
}
