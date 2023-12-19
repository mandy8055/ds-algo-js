import Node from '../node-class/Node.mjs';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // Add first in LinkedList(prepend)
  prepend(value) {
    if (!value)
      throw new Error(
        'Nothing to prepend. prepend() should be provided exactly one argument',
      );
    // Create a new Node
    const newNode = new Node(value);
    if (!this.isEmpty()) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.size++;
  }
  // Add last in LinkedList(append)
  append(value) {
    if (!value)
      throw new Error(
        'Nothing to append. append() should be provided exactly one argument',
      );
    // Create a newNode
    const newNode = new Node(value);
    if (!this.isEmpty()) {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    } else {
      this.head = newNode;
    }
    this.size++;
  }
  printLinkedList() {
    let currNode = this.head;
    let resultantList = '';
    while (currNode) {
      resultantList += `${currNode.value} -> `;
      currNode = currNode.next;
    }
    resultantList += 'null';
    return resultantList;
  }
}
