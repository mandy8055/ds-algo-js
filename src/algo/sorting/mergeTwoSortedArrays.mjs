export default function mergeTwoSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;
  while (i !== arr1.length && j !== arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  if (i !== arr1.length) {
    result.push(...arr1.slice(i));
  }

  if (j !== arr2.length) {
    result.push(...arr2.slice(j));
  }
  return result;
}
