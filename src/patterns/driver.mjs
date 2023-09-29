import getInput from '../../scripts/getInput.mjs';
import logger from '../../scripts/logger.mjs';
import pattern17 from './pattern17.mjs';

export default async function main() {
  const n = await getInput('Enter a number ');
  logger(pattern17(n));
}

main();
