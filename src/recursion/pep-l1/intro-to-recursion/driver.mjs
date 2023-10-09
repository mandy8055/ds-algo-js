import getInput from '../../../../scripts/getInput.mjs';
import logger from '../../../../scripts/logger.mjs';
import printDecreasing from './printDecreasing.mjs';
import printIncDec from './printIncDec.mjs';
import printIncreasing from './printIncreasing.mjs';

(async function main() {
  const num = parseInt(await getInput('Enter a number '));
  //   logger(printDecreasing(num));
  //   logger(printIncreasing(num));
  logger(printIncDec(num));
})();
