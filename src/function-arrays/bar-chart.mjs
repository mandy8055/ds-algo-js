export default function createBarChart(arr) {
  let result = '';
  let maxArr = Math.max(...arr);
  for (let i = maxArr; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= i) {
        result += '*\t';
      } else {
        result += '\t';
      }
    }
    result += '\n';
  }
  return result;
}
