export default function pattern7(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) {
        result += '*';
      } else {
        result += ' \t';
      }
    }
    result += '\n';
  }

  return result;
}
