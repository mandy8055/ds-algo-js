/* 
1. You're given an array.
2. You are required to find the span of input. Span is defined as difference of maximum value and minimum value.
constraint: 
1 <= size of array <= 10^4
 -10^9 <= elements <= 10^9
*/

export default function spanOfArray(arr) {
  if (arr.length === 0) {
    throw new Error('Array must contain at least one element');
  }
  let minVal = +Infinity;
  let maxVal = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }

  return maxVal - minVal;
  //   return Math.max(...arr) - Math.min(...arr); // Not highly efficient
}
