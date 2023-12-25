import LinkedList from '../LinkedList.mjs';

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should initialize correctly', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.size).toBe(0);
  });

  it('should append correctly', () => {
    linkedList.append(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.size).toBe(1);
  });

  it('should prepend correctly', () => {
    linkedList.prepend(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.size).toBe(1);
  });

  it('should print linked list correctly', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.printLinkedList()).toBe('1 -> 2 -> 3 -> null');
  });

  it('should return correct size', () => {
    expect(linkedList.getSize()).toBe(0);
    linkedList.append(1);
    expect(linkedList.getSize()).toBe(1);
  });

  it('should prepend correctly when list is not empty', () => {
    linkedList.append(1);
    linkedList.prepend(2);
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.head.next.value).toBe(1);
  });

  it('should throw error when append is called without arguments', () => {
    expect(() => linkedList.append()).toThrow(
      'Nothing to append. append() should be provided exactly one argument',
    );
  });

  it('should throw error when prepend is called without arguments', () => {
    expect(() => linkedList.prepend()).toThrow(
      'Nothing to prepend. prepend() should be provided exactly one argument',
    );
  });

  describe('getAt', () => {
    it('should return the value at the given index', () => {
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);
      expect(linkedList.getAt(1)).toBe(20);
    });

    it('should return -1 if the list is empty', () => {
      expect(linkedList.getAt(1)).toBe(-1);
    });

    it('should return -1 if the index is out of bounds', () => {
      linkedList.append(10);
      expect(linkedList.getAt(2)).toBe(-1);
    });
  });

  describe('getLast', () => {
    it('should return the last value in the list', () => {
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);
      expect(linkedList.getLast()).toBe(30);
    });

    it('should return -1 if the list is empty', () => {
      expect(linkedList.getLast()).toBe(-1);
    });
  });

  describe('getFirst', () => {
    it('should return the first value in the list', () => {
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);
      expect(linkedList.getFirst()).toBe(10);
    });

    it('should return -1 if the list is empty', () => {
      expect(linkedList.getFirst()).toBe(-1);
    });
  });

  describe('removeFirst', () => {
    it('should remove the first value in the list', () => {
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);
      expect(linkedList.removeFirst()).toBe(10);
      expect(linkedList.getFirst()).toBe(20);
    });

    it('should throw an error if the list is empty', () => {
      expect(() => linkedList.removeFirst()).toThrow(
        'List is empty. Should have at least 1 item to remove',
      );
    });
  });
  describe('#findMid', () => {
    it('should return -1 when the list is empty', () => {
      const list = new LinkedList();
      const mid = list.findMid();
      expect(mid).toBe(-1);
    });

    it('should return the middle element when the list has odd number of elements', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const mid = list.findMid();
      expect(mid).toBe(2);
    });

    it('should return the first middle element when the list has even number of elements', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      const mid = list.findMid();
      expect(mid).toBe(2);
    });
  });
  describe('reverseList', () => {
    it('should handle the case when the list is empty', () => {
      const list = new LinkedList();
      expect(() => list.reverseList()).not.toThrow();
      expect(list.head).toBeNull();
    });

    it('should reverse the list when the list has one element', () => {
      const list = new LinkedList();
      list.append(1);
      list.reverseList();
      expect(list.head.value).toBe(1);
    });

    it('should reverse the list when the list has multiple elements', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.reverseList();
      expect(list.head.value).toBe(3);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(1);
    });
  });
  describe('#removeAt', () => {
    it('should return -1 when the list is empty', () => {
      const list = new LinkedList();
      const removedValue = list.removeAt(1);
      expect(removedValue).toBe(-1);
    });

    it('should return -1 when the index is out of bounds', () => {
      const list = new LinkedList();
      list.append(1);
      const removedValue = list.removeAt(2);
      expect(removedValue).toBe(-1);
    });

    it('should remove the first element when index is 0', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      const removedValue = list.removeAt(0);
      expect(removedValue).toBe(1);
      expect(list.head.value).toBe(2);
    });

    it('should remove the last element when index is size - 1', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      const removedValue = list.removeAt(1);
      expect(removedValue).toBe(2);
      expect(list.head.value).toBe(1);
    });

    it('should remove the element at the given index', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      const removedValue = list.removeAt(1);
      expect(removedValue).toBe(2);
      expect(list.head.next.value).toBe(3);
    });
  });
});
