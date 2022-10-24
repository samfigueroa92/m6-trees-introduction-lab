class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    let currentNode = this.root;
    let queue = [this.root];

    while(queue.length){
      currentNode = queue.pop();

      if(currentNode.data === data){
        return currentNode
      }

      if(currentNode.children){
        for(let child of currentNode.children){
          queue.push(child)
        }
      }
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
