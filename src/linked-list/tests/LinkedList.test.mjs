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
});
