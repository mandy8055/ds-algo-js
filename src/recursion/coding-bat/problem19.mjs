export default function pairStar(str) {
  // base case
  if (str.length === 0 || str.length === 1) {
    return str;
  }
  // main case
  const ch = str.charAt(0);
  const restOfString = str.substring(1);
  if (ch === str.charAt(1)) {
    return `${ch}*${pairStar(restOfString)}`;
  } else {
    return `${ch}${pairStar(restOfString)}`;
  }
}
