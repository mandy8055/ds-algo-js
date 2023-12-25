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
  removeLast() {
    // base check
    if (this.isEmpty()) {
      throw new Error('List is empty. Should have at least 1 item to remove');
    }
    if (this.getSize() === 1) {
      return this.removeFirst();
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    const removedNodeValue = curr.next.value;
    curr.next = null;
    this.size--;
    return removedNodeValue;
  }
  removeAt(index) {
    // base check
    if (this.isEmpty()) {
      logger('List is empty', { type: 'warn' });
      return -1;
    } else if (index < 0 || index >= this.size) {
      logger('Invalid argument', { type: 'error' });
      return -1;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.getSize() - 1) {
      return this.removeLast();
    }
    // Main case
    let prev;
    let curr = this.head;
    let idx = 0;
    while (idx !== index) {
      prev = curr;
      curr = curr.next;
      idx++;
    }
    prev.next = curr.next;
    return curr.value;
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
  getNodeAt(index) {
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
    return currNode;
  }

  reverseList() {
    if (this.isEmpty()) {
      logger('List is empty', { type: 'warn' });
      return;
    }
    let p = null; // previous to previous
    let q = null; // previous
    while (this.head) {
      p = q;
      q = this.head;
      this.head = this.head.next;
      q.next = p;
    }
    this.head = q;
  }

  findMid() {
    if (this.isEmpty()) {
      logger('List is empty', { type: 'warn' });
      return -1;
    }
    let fast = this.head;
    let slow = this.head;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    // If in case the middle element appears in second half for even numbered list
    // if (fast.next) {
    //   slow = slow.next;
    // }
    return slow.value;
  }
}
