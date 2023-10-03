export default function waveTraversal(input2DArray) {
  const result = [];
  for (let cols = 0; cols < input2DArray[0]?.length; cols++) {
    let j;
    if (cols % 2 === 0) {
      j = 0;
      while (j < input2DArray.length) {
        result.push(input2DArray[j][cols]);
        j++;
      }
    } else {
      j = input2DArray.length - 1;
      while (j >= 0) {
        result.push(input2DArray[j][cols]);
        j--;
      }
    }
  }
  return result;
}
