import Node from '../../node-class/Node.mjs';
import LinkedList from '../LinkedList.mjs';
import findIntersectionPoint from '../intersection-point-of-two-ll.mjs';

describe('findIntersectionPoint', () => {
  let linkedList1, linkedList2;

  beforeEach(() => {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  it('should return null if both linked lists are empty', () => {
    expect(findIntersectionPoint(linkedList1, linkedList2)).toBeNull();
  });

  it('should return null if there is no intersection point', () => {
    linkedList1.append(1);
    linkedList1.append(2);
    linkedList1.append(3);

    linkedList2.append(4);
    linkedList2.append(5);
    linkedList2.append(6);

    expect(findIntersectionPoint(linkedList1, linkedList2)).toBeNull();
  });
});
