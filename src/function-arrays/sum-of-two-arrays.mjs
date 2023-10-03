export default function sumOfTwoArrays(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1.map((el, idx) => el + (arr2[idx] || 0));
  } else {
    return arr2.map((el, idx) => el + (arr1[idx] || 0));
  }
}
