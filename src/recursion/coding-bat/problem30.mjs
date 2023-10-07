export default function strDist(str, sub) {
  const subLen = sub.length;
  // base case
  if (str.length < subLen) {
    return 0;
  }
  // main case
  if (str.startsWith(sub)) {
    return str.lastIndexOf(sub) + subLen;
  }
  return strDist(str.substring(1), sub);
}
