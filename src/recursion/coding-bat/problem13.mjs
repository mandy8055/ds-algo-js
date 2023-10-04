export default function changePi(str = '') {
  // base case
  if (str.length === 0) {
    return '';
  }
  // main case
  if (str.startsWith('pi')) {
    return '3.14' + changePi(str.substring(2));
  } else {
    return str.charAt(0) + changePi(str.substring(1));
  }
}
