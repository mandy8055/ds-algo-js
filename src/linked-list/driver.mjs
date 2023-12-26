import logger from '../../scripts/logger.mjs';
import LinkedList from './LinkedList.mjs';
import findIntersectionPoint from './intersection-point-of-two-ll.mjs';
import reverseListData from './reverse-list-data.mjs';

const linkedList = new LinkedList();
logger(linkedList.isEmpty());
try {
  // logger(linkedList.getFirst());
  linkedList.append(43);
  linkedList.prepend(12);
  linkedList.append(14);
  linkedList.append(18);
  linkedList.append(29);
  // logger(`Removed value ${linkedList.removeFirst()}`);
  // logger(`Removed value ${linkedList.removeLast()}`);
  logger(`Removed value ${linkedList.removeAt(2)}`);
  // logger(linkedList.getFirst());
  // logger(linkedList.getLast());
  // logger(linkedList.getAt(2));
  // reverseListData(linkedList);
  // linkedList.reverseList();
  // logger(linkedList.findMid());
} catch (err) {
  logger(err.message, { type: 'error' });
} finally {
  logger(linkedList.printLinkedList());
  logger(linkedList.getSize());
  logger(linkedList.isEmpty());
}
