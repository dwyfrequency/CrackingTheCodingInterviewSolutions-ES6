const Node = require('../util/LinkedListNode');
const returnKthToLast = require('./returnKthToLastES6');

describe('Testing returnKthToLast', () => {
  let node1 = null;
  let lastNode = null;
  beforeEach(() => {
    node1 = new Node('a');
    const node2 = new Node('b');
    const node3 = new Node('c');
    const node4 = new Node('d');
    lastNode = new Node('e');
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = lastNode;
  });

  test('should return the last element', () => {
    expect(returnKthToLast(node1, 1)).toEqual(lastNode);
  });
  test('should return the head node', () => {
    expect(returnKthToLast(node1, 5)).toEqual(node1);
  });
});
