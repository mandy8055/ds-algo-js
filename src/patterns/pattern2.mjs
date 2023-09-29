export default function pattern2(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      result += '*\t';
    }
    result += '\n';
  }
  return result;
}
