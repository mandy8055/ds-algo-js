import LinkedList from '../LinkedList.mjs';
import reverseListData from '../reverse-list-data.mjs';

describe('reverseListData', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should handle the case when the list is empty', () => {
    const reversedList = reverseListData(linkedList);
    expect(reversedList).toBeNull();
  });

  it('should reverse the list when the list has one element', () => {
    linkedList.append(1);
    const reversedList = reverseListData(linkedList);
    expect(reversedList.head.value).toBe(1);
  });

  it('should reverse the list when the list has multiple elements', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const reversedList = reverseListData(linkedList);
    expect(reversedList.head.value).toBe(3);
    expect(reversedList.head.next.value).toBe(2);
    expect(reversedList.head.next.next.value).toBe(1);
  });
});
