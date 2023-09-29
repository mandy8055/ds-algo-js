export default function pattern16(n) {
  let result = '';
  let sp = 2 * n - 3;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += `${j}\t`;
    }
    for (let j = 1; j <= sp; j++) {
      result += '\t';
    }
    for (let j = i; j >= 1; j--) {
      if (!(j === n)) result += `${j}\t`;
    }
    sp -= 2;
    result += '\n';
  }

  return result;
}
