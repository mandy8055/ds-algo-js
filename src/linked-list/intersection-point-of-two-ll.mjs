export default function findIntersectionPoint(linkedList1, linkedList2) {
  let node1 = linkedList1.head;
  let size1 = linkedList1.getSize();
  let node2 = linkedList2.head;
  let size2 = linkedList2.getSize();
  let delta = Math.abs(size1 - size2);

  if (size1 > size2) {
    for (let i = 0; i < delta; i++) {
      node1 = node1.next;
    }
  } else if (size2 > size1) {
    for (let i = 0; i < delta; i++) {
      node2 = node2.next;
    }
  }
  while (node1 && node2 && node1 !== node2) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1 === node2 ? node1 : null;
}
