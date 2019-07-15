const Node = require('../util/LinkedListNode');

describe('removeDups tests', () => {
  test('should ', () => {
    const linkedlist = new Node('a')
      .next(new Node('b'))
      .next(new Node('c'))
      .next(new Node('d'))
      .next(new Node('a'))
      .next(new Node('e'));
    expect(linkedList).toBeTruthy();
  });
  test('should ', () => {
    expect(linkedList.value).toBe(5);
  });
});
