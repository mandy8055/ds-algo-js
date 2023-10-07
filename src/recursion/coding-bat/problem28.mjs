export default function strCount(str, sub) {
  const subLen = sub.length;
  // base case
  if (str.length < subLen) {
    return 0;
  }
  // main case
  if (str.substring(0, subLen) === sub) {
    return 1 + strCount(str.substring(subLen), sub);
  } else {
    return strCount(str.substring(1), sub);
  }
}
