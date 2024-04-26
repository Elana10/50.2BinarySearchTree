class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if(this.root ===null){
      this.root = new Node(val);
      return this
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root ===null){
      this.root = new Node(val);
      return this
    }
    
    if (current.val > val){
      if (current.left === null){
        current.left = new Node (val);
        return this;
      }
      return this.insertRecursively(val, current.left)
    } else {
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }

  }

  // /** find(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;

    if (val === current) return current;
    
    while(current && !found){
      if(current.val > val){
        current = current.left
      }
      if(current.val < val){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;

  }

  // /** findRecursively(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root === null) return undefined;

    if(current.val > val){
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left)
    }
    if(current.val < val){
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right)
    }
    return current;
  }

  // /** dfsPreOrder(): Traverse the array using pre-order DFS.
  //  * Return an array of visited nodes. */

  dfsPreOrder() {
    let nodeArray = [];
    let current = this.root;

    function traverse(node){
      nodeArray.push(node.val);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }

    traverse(current)
    return nodeArray;
  }

  // /** dfsInOrder(): Traverse the array using in-order DFS.
  //  * Return an array of visited nodes. */

  dfsInOrder() {
    let nodeArray = [];
    let current = this.root;

    function traverse(node){
      if(node.left) traverse(node.left)
      nodeArray.push(node.val);      
      if(node.right) traverse(node.right)
    }

    traverse(current)
    return nodeArray;
  }

  // /** dfsPostOrder(): Traverse the array using post-order DFS.
  //  * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodeArray = [];
    let current = this.root;

    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      nodeArray.push(node.val);       
    }

    traverse(current)
    return nodeArray;
  }

  // /** bfs(): Traverse the array using BFS.
  //  * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right);
      }

    }
    return data;
  }

}

module.exports = BinarySearchTree;
