export default function pattern1(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += '*\t';
    }
    result += '\n';
  }
  return result;
}
