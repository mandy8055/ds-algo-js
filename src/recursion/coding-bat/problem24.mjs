export default function stringClean(str) {
  // base case
  if (str.length <= 1) {
    return str;
  }
  // main case (faith)
  const restOfString = str.substring(1);
  const ch = str.charAt(0);
  if (ch === str.charAt(1)) {
    return stringClean(restOfString);
  } else {
    return ch + stringClean(restOfString);
  }
}
