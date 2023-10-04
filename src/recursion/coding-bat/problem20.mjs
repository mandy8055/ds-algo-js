export default function endX(str) {
  // base case
  if (str.length === 0) {
    return str;
  }
  // main case
  const ch = str.charAt(0);
  const restOfString = str.substring(1);
  if (ch === 'x') {
    return endX(restOfString) + ch;
  } else {
    return ch + endX(restOfString);
  }
}
