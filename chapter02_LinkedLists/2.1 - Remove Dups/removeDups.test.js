const Node = require('../util/LinkedListNode');
const { removeDups } = require('./removeDupsES6');

describe('removeDups tests', () => {
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
  test('should ', () => {
    const nodeA = new Node('a');
    const node2 = new Node('b');
    const node3 = new Node('c');
    const node4 = new Node('d');
    const node5 = new Node('e');
    nodeA.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = new Node('b');
    removeDups(nodeA);
    console.log(nodeA);
    expect(nodeA).toEqual(node1);
  });
});
