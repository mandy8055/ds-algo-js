import swap from '../../utils/swap.mjs';

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      } else {
        break;
      }
    }
  }
}
