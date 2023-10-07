import swap from '../../../utils/swap.mjs';

export default function sort012(arr) {
  let i = 0,
    j = 0,
    k = arr.length - 1;
  while (i <= k) {
    if (arr[i] === 0) {
      swap(arr, i, j);
      i++;
      j++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      swap(arr, i, k);
      k--;
    }
  }
}
