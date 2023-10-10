function displayArray(arr, idx = 0) {
  let output = '';
  // base case
  if (idx === arr.length) {
    return output;
  }
  // main case
  output += arr[idx] + '\n';
  output += displayArray(arr, idx + 1);
  return output;
}

function displayArrayReverse(arr, idx = 0) {
  let output = '';
  // base case
  if (idx === arr.length) {
    return output;
  }
  // main case
  output += displayArrayReverse(arr, idx + 1);
  output += arr[idx] + '\n';
  return output;
}

export { displayArray, displayArrayReverse };
