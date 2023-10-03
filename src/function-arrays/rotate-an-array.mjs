import reversePortion from '../utils/reverse-portion.mjs';

export default function rotateArray(arr, k) {
  k %= arr.length;
  if (k < 0) {
    k += arr.length;
  }
  reversePortion(arr, 0, arr.length - 1);
  reversePortion(arr, 0, k - 1);
  reversePortion(arr, k, arr.length - 1);
  return arr;
}
