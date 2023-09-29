import getInput from '../scripts/getInput.mjs';
import logger from '../scripts/logger.mjs';

export default async function inputArray(len) {
  if (!len) {
    len = await getInput('Enter length of array ');
    logger(`Enter ${len} elements`, 'green');
  }
  const inputArr = [];
  for (let i = 0; i < len; i++) {
    inputArr.push(parseInt(await getInput()));
  }
  return inputArr;
}
