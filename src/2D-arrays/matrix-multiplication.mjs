export default function matrixMultiplication(mat1, mat2) {
  if (mat1.length === 0 || mat2.length === 0) {
    return [];
  }
  const rows1 = mat1.length;
  const cols1 = mat1[0].length;
  const rows2 = mat2.length;
  const cols2 = mat2[0].length;
  if (cols1 !== rows2) {
    throw new Error('Invalid input');
  }
  const result = new Array(rows1).fill(0).map(() => new Array(cols2).fill(0));
  for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < cols2; j++) {
      for (let k = 0; k < rows2; k++) {
        result[i][j] += mat1[i][k] * mat2[k][j];
      }
    }
  }
  return result;
}
