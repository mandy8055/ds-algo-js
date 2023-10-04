export default function changeXY(str) {
  // base case
  if (str.length === 0) {
    return '';
  }
  // main case
  const restOfString = str.substring(1);
  const ch = str.charAt(0);
  if (ch === 'x') {
    return 'y' + changeXY(restOfString);
  } else {
    return ch + changeXY(restOfString);
  }
}
