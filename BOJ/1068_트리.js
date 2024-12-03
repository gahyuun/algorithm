let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, input, deleteNode] = fs.readFileSync(path).toString().trim().split('\n');

input = input.split(' ').map(Number);
const tree = [];
let parent = 0;
let deleteNodeParent = 0;
for (let i = 0; i < Number(n); i++) {
  tree[i] = [];
}
for (let i = 0; i < input.length; i++) {
  const v = input[i];
  if (v === -1) {
    parent = i;
  } else {
    tree[v].push(i);
  }
  if (i === Number(deleteNode)) {
    deleteNodeParent = v;
  }
}
const deleteNodes = [Number(deleteNode)];
if (deleteNodeParent === -1) {
  console.log(0);
} else {
  tree[deleteNodeParent] = tree[deleteNodeParent].filter((v) => v !== Number(deleteNode));
  while (deleteNodes.length > 0) {
    const deleteNode = deleteNodes.shift();
    if (tree[deleteNode]) {
      for (const v of tree[deleteNode]) {
        deleteNodes.push(v);
      }
      tree[deleteNode] = null;
    } else {
      tree[deleteNode] = null;
    }
  }
  let answer = 0;
  for (let v of tree) {
    if (v && v.length === 0) {
      answer++;
    }
  }

  console.log(answer);
}
