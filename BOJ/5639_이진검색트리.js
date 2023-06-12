const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(v) {
    if (v < this.value) {
      if (!this.left) this.left = new Node(v);
      else this.left.insert(v);
    } else {
      if (!this.right) this.right = new Node(v);
      else this.right.insert(v);
    }
  }
}
const stack = [];
const data = input.map(Number);
const root = new Node(data[0]); // root 설정

for (let i = 1; i < data.length; i++) {
  root.insert(data[i]);
}

const postOrder = (node) => {
  if (node === null) {
    return;
  }
  postOrder(node.left);
  postOrder(node.right);
  stack.push(node.value);
};

postOrder(root);
stack.forEach((element) => {
  console.log(element);
});
