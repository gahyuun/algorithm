const solution = (input) => {
  const N = +input[0];
  input = input.slice(1);
  const tree = {};
  for (let i = 0; i < N; i++) {
    const [node, left, right] = input[i].split(' ');
    tree[node] = [left, right];
  }
  let result = '';

  const preOrder = (node) => {
    if (node === '.') {
      return;
    }

    const [left, right] = tree[node];
    result += node;
    preOrder(left);
    preOrder(right);
  };

  const inOrder = (node) => {
    if (node === '.') {
      return;
    }

    const [left, right] = tree[node];
    inOrder(left);
    result += node;
    inOrder(right);
  };

  const postOrder = (node) => {
    if (node === '.') {
      return;
    }

    const [left, right] = tree[node];
    postOrder(left);
    postOrder(right);
    result += node;
  };
  preOrder('A');
  result += '\n';
  inOrder('A');
  result += '\n';
  postOrder('A');

  return result;
};

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(solution(input));
    process.exit();
  });
