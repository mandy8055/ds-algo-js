export default function inverseOfArray(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[arr[i]] = i;
  }
  return resultArr;
}
