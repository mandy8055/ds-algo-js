import partitionArray from './partitionArray.mjs';

export default function quickSort(arr) {
  const low = 0;
  const high = arr.length - 1;
  quickSortPrivate(arr, low, high);
}

function quickSortPrivate(arr, low, high) {
  if (low > high) {
    return;
  }
  const { pivotIndex } = partitionArray(arr, arr[high], low, high);
  quickSortPrivate(arr, low, pivotIndex - 1);
  quickSortPrivate(arr, pivotIndex + 1, high);
}
