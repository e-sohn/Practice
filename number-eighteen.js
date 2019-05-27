// implement binary search tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  addNode(data) {
    let newNode = new Node(data);
    if(!this.root) {
      this.root = newNode;
      this.height = 1;
    } else {
      this.insert(this.root, newNode); 
    }
  }
  insert(node, newNode) {
    if(newNode.data < node.data) {
      if(!node.left) {
        node.left = newNode;
      } else {
        this.insert(node.left, newNode);
      }
    } else if(newNode.data > node.data) {
      if(!node.right) {
        node.right = newNode;
      } else {
        this.insert(node.right, newNode);
      }
    }
  }
  findHeight(node) {
    if(!node) {
      return 0;
    } else {
      let lDepth = this.findHeight(node.left);
      let rDepth = this.findHeight(node.right);
      if(lDepth > rDepth) {
        return lDepth + 1;
      } else {
        return rDepth + 1;
      }
    }
  }

  findLargest() {
    if(!this.root) {
      return null;
    } else {
      let current = this.root;
      while(current.right) {
        current = current.right;
      }
      return current;
    }
  }
  findSecondLargest() {
    if(!this.root) {
      return null;
    } else {
      let current = this.root;
      while(current.right) {
        if(!current.right.right) {
          if(!current.right.left) {
            return current;
          } else {
            current = current.right.left;
            while(current.right) {
              current = current.right;
            }
            return current;
          }
        } else {
          current = current.right;
        }
      }
    }
  }
}

const result = new BinaryTree();
result.addNode(10);
result.addNode(11);
result.addNode(12);
result.addNode(9);
result.addNode(9.5);
result.addNode(11.5);
result.addNode(11.7);
result.addNode(11.9);
const resultHeight = result.findHeight(result.root);
console.log(resultHeight);
