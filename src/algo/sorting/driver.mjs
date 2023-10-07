import inputArray from '../../../other/input-arr.mjs';
import logger from '../../../scripts/logger.mjs';
import sort012 from './applications/sort012.mjs';
import mergeSort from './mergeSort.mjs';
import mergeTwoSortedArrays from './mergeTwoSortedArrays.mjs';

(async function main() {
  const arr1 = await inputArray();
  //   const arr2 = await inputArray();
  //   logger(mergeTwoSortedArrays(arr1, arr2));
  //   logger(mergeSort(arr1));
  sort012(arr1);
  logger(arr1);
})();
