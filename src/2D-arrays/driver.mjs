import get2DArray from '../../other/input-2d.mjs';
import logger from '../../scripts/logger.mjs';

(async function main() {
  const mat1 = await get2DArray();
  logger(mat1);
})();
