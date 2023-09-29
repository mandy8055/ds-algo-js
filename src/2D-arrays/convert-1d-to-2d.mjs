export default function convertTo2D(array1D, m, n) {
  if (m * n !== array1D.length) {
    return [];
  }

  const resultArr = [];
  for (let i = 0; i < array1D.length; i += n) {
    resultArr.push(array1D.slice(i, i + n));
  }
  return resultArr;
}
