const Node = require('./LinkedListNode');

const printLinkedList = node => {
  let curNode = node;
  while (curNode) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
};
const node1 = new Node('a');
const node2 = new Node('b');
const node3 = new Node('c');
const node4 = new Node('d');
const node5 = new Node('e');
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(printLinkedList(node1));
