import logger from '../../scripts/logger.mjs';
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
  removeFirst() {
    // base check
    if (this.isEmpty()) {
      throw new Error('List is empty. Should have at least 1 item to remove');
    }
    const removedNodeValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return removedNodeValue;
  }
  getFirst() {
    // base check
    if (this.isEmpty()) {
      logger('List is empty', { type: 'warn' });
      return -1;
    }
    return this.head.value;
  }
  getLast() {
    // base check
    if (this.isEmpty()) {
      logger('List is empty', { type: 'warn' });
      return -1;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode.value;
  }
  getAt(index) {
    // base check
    if (this.isEmpty()) {
      logger('List is empty', { type: 'warn' });
      return -1;
    } else if (index < 0 || index >= this.size) {
      logger('Invalid argument', { type: 'error' });
      return -1;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode.value;
  }
}
