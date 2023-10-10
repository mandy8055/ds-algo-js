import inputArray from '../../../../other/input-arr.mjs';
import getInput from '../../../../scripts/getInput.mjs';
import logger from '../../../../scripts/logger.mjs';
import allIndices from './allIndices.mjs';
import { displayArray, displayArrayReverse } from './displayArray.mjs';
import firstIdx from './firstIdx.mjs';
import lastIdx from './lastIdx.mjs';
import maxInArray from './max-in-array.mjs';

(async function main() {
  const arr = await inputArray();
  const x = parseInt(await getInput('Enter the number to search '));
  //   logger(displayArray(arr));
  //   logger(displayArrayReverse(arr));
  //   logger(maxInArray(arr));
  //   logger(firstIdx(arr, x));
  //   logger(lastIdx(arr, x));
  logger(allIndices(arr, x));
})();
