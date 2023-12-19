import logger from '../../scripts/logger.mjs';
import LinkedList from './LinkedList.mjs';

const linkedList = new LinkedList();
logger(linkedList.isEmpty());
try {
  linkedList.append(43);
  linkedList.prepend(12);
  linkedList.append(14);
  linkedList.append(18);
} catch (err) {
  logger(err.message, { type: 'error' });
} finally {
  logger(linkedList.printLinkedList());
  logger(linkedList.getSize());
  logger(linkedList.isEmpty());
}
