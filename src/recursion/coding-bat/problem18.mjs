export default function allStar(str) {
  // base case
  if (str.length === 1 || str.length === 0) {
    return str;
  }
  // main case
  return `${str.charAt(0)}*${allStar(str.substring(1))}`;
}
