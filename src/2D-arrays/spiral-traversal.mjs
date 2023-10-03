export default function spiralTraversal(input2DArray) {
  if (input2DArray.length === 0) {
    return [];
  }
  const result = [];
  let minRow = 0;
  let minCol = 0;
  let maxRow = input2DArray.length - 1;
  let maxCol = input2DArray[0].length - 1;
  const totalLength = (maxRow + 1) * (maxCol + 1);
  let counter = 0;
  while (counter !== totalLength) {
    for (let i = minRow; i <= maxRow && counter !== totalLength; i++) {
      result.push(input2DArray[i][minCol]);
      counter++;
    }
    minCol += 1;
    for (let i = minCol; i <= maxCol && counter !== totalLength; i++) {
      result.push(input2DArray[maxRow][i]);
      counter++;
    }
    maxRow -= 1;
    for (let i = maxRow; i >= minRow && counter !== totalLength; i--) {
      result.push(input2DArray[i][maxCol]);
      counter++;
    }
    maxCol -= 1;
    for (let i = maxCol; i >= minCol && counter !== totalLength; i--) {
      result.push(input2DArray[minRow][i]);
      counter++;
    }
    minRow += 1;
  }
  return result;
}
