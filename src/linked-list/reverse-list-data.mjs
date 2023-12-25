import logger from '../../scripts/logger.mjs';

export default function reverseListData(linkedList) {
  // base check
  if (linkedList.isEmpty()) {
    logger('List is empty', { type: 'warn' });
    return null;
  }
  let i = 0;
  let j = linkedList.getSize() - 1;
  while (i < j) {
    let nodeAtI = linkedList.getNodeAt(i);
    let nodeAtJ = linkedList.getNodeAt(j);
    let temp = nodeAtI.value;
    nodeAtI.value = nodeAtJ.value;
    nodeAtJ.value = temp;
    i++;
    j--;
  }
  return linkedList;
}
