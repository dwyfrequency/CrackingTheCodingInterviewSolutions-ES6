const removeDups = node => {
  const set = new Set();
  let parentNode = null;
  let curNode = node;
  while (curNode) {
    if (set.has(curNode.value)) {
      curNode = curNode.next;
      parentNode.next = curNode;
    } else {
      set.add(curNode.value);
      parentNode = curNode;
      curNode = curNode.next;
    }
  }
};

module.exports = {
  removeDups,
};
