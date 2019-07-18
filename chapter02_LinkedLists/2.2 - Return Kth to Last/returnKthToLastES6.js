const returnKthToLast = (node, n) => {
  let leftMostNode = node;
  let currentNode = node;
  // 2
  // (a) -> (b) -> (c) -> null
  for (let i = 1; i <= n; i++) {
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
  return leftMostNode;
};

module.exports = returnKthToLast;
