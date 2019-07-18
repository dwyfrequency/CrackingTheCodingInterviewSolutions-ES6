const returnKthToLast = (node, n) => {
  let leftMostNode = node;
  let currentNode = node;
  // 2
  // (a) -> (b) -> (c)
  for (let i = 0; i < n; i++) {
    currentNode = currentNode.next;
  }
  if (currentNode === null) {
    // if it's null, then we return the head
    return leftMostNode;
  }
  while (currentNode) {
    currentNode = currentNode.next;
    leftMostNode = leftMostNode.next;
  }
  return currentNode;
};

module.exports = returnKthToLast;
