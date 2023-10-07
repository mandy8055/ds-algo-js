import mergeTwoSortedArrays from './mergeTwoSortedArrays.mjs';

export default function mergeSort(arr) {
  const low = 0;
  const high = arr.length - 1;
  // return privateMergeSort(arr, low, high);
  // For converting merge sort to in-place (just for efficient testing purpose)
  const sorted = privateMergeSort(arr, low, high);
  arr.splice(0, arr.length, ...sorted);
}

function privateMergeSort(arr, low, high) {
  if (low >= high) {
    return [arr[low]];
  }
  const mid = Math.floor((low + high) / 2);
  const arr1 = privateMergeSort(arr, low, mid);
  const arr2 = privateMergeSort(arr, mid + 1, high);
  return mergeTwoSortedArrays(arr1, arr2);
}
