export default function diffOfTwoArrays(arr1, arr2) {
  // Requirement: arr2[i] - arr1[i]
  if (arr1.length < arr2.length) {
    return arr2.map((el, idx) => el - (arr1[idx] || 0));
  } else {
    return arr1.map((el, idx) => (arr2[idx] || 0) - el);
  }
}
