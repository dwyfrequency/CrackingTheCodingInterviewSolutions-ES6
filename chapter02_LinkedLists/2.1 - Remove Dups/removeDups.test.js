const SinglyLinkedList = require('../util/SinglyLinkedList');

describe('removeDups tests', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new SinglyLinkedList(5);
  });
  afterEach(() => {
    linkedList = null;
  });
  test('should ', () => {
    expect(linkedList).toBeTruthy();
  });
  test('should ', () => {
    expect(linkedList.value).toBe(5);
  });
});
