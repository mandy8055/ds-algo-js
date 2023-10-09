import swap from '../../utils/swap.mjs';

export default function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j + 1] < arr[j]) {
        swapped = true;
        swap(arr, j, j + 1);
      }
    }
    if (!swapped) {
      break;
    }
  }
}
