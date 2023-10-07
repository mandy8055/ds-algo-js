export default function nestParen(str) {
  // base case
  if (str.length <= 2) {
    if (str === '()' || str === '') {
      return true;
    } else {
      return false;
    }
  }
  // main case
  const restOfString = str.substring(1, str.length - 1);
  if (str.startsWith('(') && str.endsWith(')')) {
    return nestParen(restOfString);
  } else {
    return false;
  }
}
