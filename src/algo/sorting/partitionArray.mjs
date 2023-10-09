import swap from '../../utils/swap.mjs';

/* 
Applications:
1. Sort 01.
2. Segregate +ve and -ve numbers
*/

export default function partitionArray(arr, pivot, low, high) {
  let i = low,
    j = low;
  while (i <= high) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      i++;
      j++;
    } else {
      i++;
    }
  }
  return { array: arr, pivotIndex: j - 1 };
}
