import swap from '../../../utils/swap.mjs';

export default function sort01(arr) {
  let i = 0,
    j = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      swap(arr, i, j);
      i++;
      j++;
    } else {
      i++;
    }
  }
}
