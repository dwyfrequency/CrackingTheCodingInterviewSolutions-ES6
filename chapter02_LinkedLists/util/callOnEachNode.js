const callOnEachNode = (node, callback) => {
  let curNode = node;
  while (curNode) {
    callback(curNode.value);
    curNode = curNode.next;
  }
};

module.exports = {
  callOnEachNode,
};
