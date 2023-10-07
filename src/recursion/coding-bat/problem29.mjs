export default function strCopies(str, sub, n) {
  // base case
  if (n === 0) {
    return true;
  } else if (str.length < sub.length) {
    return false;
  }
  // main case
  const restOfString = str.substring(1);
  if (str.startsWith(sub)) {
    return strCopies(restOfString, sub, n - 1);
  } else {
    return strCopies(restOfString, sub, n);
  }
}
