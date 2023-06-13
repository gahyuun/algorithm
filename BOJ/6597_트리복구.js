const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push([]);
  const arr = input[i].split(' ');
  const preOrder = arr[0];
  const inOrder = arr[1];
  const postOrder = makeTree(preOrder, inOrder);
  console.log(postOrder);
}

function makeTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return '';
  }

  const root = preorder[0];
  const rootIndex = inorder.indexOf(root);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  const leftPostorder = makeTree(leftPreorder, leftInorder);
  const rightPostorder = makeTree(rightPreorder, rightInorder);

  return leftPostorder + rightPostorder + root;
}
