const { callOnEachNode } = require('./callOnEachNode');
const Node = require('../util/LinkedListNode');

describe('printLinkedList', () => {
  const mockCallback = jest.fn(x => console.log(x));

  let node1 = null;
  beforeEach(() => {
    node1 = new Node('a');
    const node2 = new Node('b');
    const node3 = new Node('c');
    const node4 = new Node('d');
    const node5 = new Node('e');
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
  });

  test('should print 5 times', () => {
    callOnEachNode(node1, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(5);
  });

  test('should deeply equal node', () => {
    const nodeA = new Node('a');
    const node2 = new Node('b');
    const node3 = new Node('c');
    const node4 = new Node('d');
    const node5 = new Node('e');
    nodeA.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    expect(node1).toEqual(nodeA);
  });
});
