export default function noX(str) {
  // base case
  if (str.length === 0) {
    return '';
  }
  // main case
  const restOfString = str.substring(1);
  const ch = str.charAt(0);
  if (ch === 'x') {
    return noX(restOfString);
  } else {
    return ch + noX(restOfString);
  }
}
