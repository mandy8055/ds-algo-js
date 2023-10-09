import swap from '../../utils/swap.mjs';

export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i,
      j = i + 1;
    while (j < arr.length) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
      j++;
    }
    if (i !== minIdx) {
      swap(arr, i, minIdx);
    }
  }
}
