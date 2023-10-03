import rotateArray from '../function-arrays/rotate-an-array.mjs';

export default function ringRotate(input2DArray, shell, rotations) {
  // Step 1: Travel in the shell and fill the elements in a 1D array
  const linearArray = fill1DArrayFrom2DArray(input2DArray, shell);
  // Step 2: Rotate the array as per input rotations provided.
  const rotatedArray = rotateArray(linearArray, rotations);
  // Step 3: Fill the 2D array shell with the updated 1D array
  fill2DArrayFrom1DArray(input2DArray, rotatedArray, shell);
  return input2DArray;
}

function fill2DArrayFrom1DArray(input2DArray, rotatedArray, shell) {
  let minRow = shell - 1,
    minCol = shell - 1,
    maxRow = input2DArray.length - shell,
    maxCol = input2DArray[0].length - shell,
    counter = 0;

  for (let i = minRow; i <= maxRow; i++) {
    input2DArray[i][minCol] = rotatedArray[counter++];
  }
  minCol++;
  for (let i = minCol; i <= maxCol; i++) {
    input2DArray[maxRow][i] = rotatedArray[counter++];
  }
  maxRow--;
  for (let i = maxRow; i >= minRow; i--) {
    input2DArray[i][maxCol] = rotatedArray[counter++];
  }
  maxCol--;
  for (let i = maxCol; i >= minCol; i--) {
    input2DArray[minRow][i] = rotatedArray[counter++];
  }
}

function fill1DArrayFrom2DArray(input2DArray, shell) {
  const tempArr = [];
  let minRow = shell - 1,
    minCol = shell - 1,
    maxRow = input2DArray.length - shell,
    maxCol = input2DArray[0].length - shell;
  //   const size = (maxRow - minRow) * 2 + (maxCol - minCol) * 2;

  for (let i = minRow; i <= maxRow; i++) {
    tempArr.push(input2DArray[i][minCol]);
  }
  minCol++;
  for (let i = minCol; i <= maxCol; i++) {
    tempArr.push(input2DArray[maxRow][i]);
  }
  maxRow--;
  for (let i = maxRow; i >= minRow; i--) {
    tempArr.push(input2DArray[i][maxCol]);
  }
  maxCol--;
  for (let i = maxCol; i >= minCol; i--) {
    tempArr.push(input2DArray[minRow][i]);
  }
  return tempArr;
}
