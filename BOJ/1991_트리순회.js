let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

let answer = '';
function pre(tree, v) {
  if (v === '.') return;
  answer += v;
  pre(tree, tree[v][0]);
  pre(tree, tree[v][1]);
}
function mid(tree, v) {
  if (v === '.') return;
  mid(tree, tree[v][0]);
  answer += v;
  mid(tree, tree[v][1]);
}
function last(tree, v) {
  if (v === '.') return;
  last(tree, tree[v][0]);
  last(tree, tree[v][1]);
  answer += v;
}
const tree = {};
const root = input[0].trim().split(' ')[0];
for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].trim().split(' ');
  tree[a] = [b, c];
}
pre(tree, root);
console.log(answer);
answer = '';
mid(tree, root);
console.log(answer);
answer = '';
last(tree, root);
console.log(answer);
