import getInput from '../../../../scripts/getInput.mjs';
import logger from '../../../../scripts/logger.mjs';
import powerLinear from './powerLinear.mjs';
import printDecreasing from './printDecreasing.mjs';
import printIncDec from './printIncDec.mjs';
import printIncreasing from './printIncreasing.mjs';
import printZigzag from './printZigzag.mjs';
import towerOfHanoi from './towerOfHanoi.mjs';

(async function main() {
  const num = parseInt(await getInput('Enter number of disks '));
  const t1Id = parseInt(await getInput('Enter tower ID 1(default 1) ')) || 1;
  const t2Id = parseInt(await getInput('Enter tower ID 2(default 2) ')) || 2;
  const t3Id = parseInt(await getInput('Enter tower ID 3(default 3) ')) || 3;
  // const x = parseInt(await getInput('Enter the exponent '));
  //   logger(printDecreasing(num));
  //   logger(printIncreasing(num));
  // logger(printIncDec(num));
  // logger(powerLinear(num, x));
  // logger(printZigzag(num));
  towerOfHanoi(num, t1Id, t2Id, t3Id);
})();
