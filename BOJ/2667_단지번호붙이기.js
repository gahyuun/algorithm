// 연습장

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().split('\n');
const array = [];
const visited = [];
for (let i = 1; i < input.length; i++) {
  array.push(input[i].split('').map(Number));
  visited.push([]);
  for (let j = 0; j < Number(input[0]); j++) {
    visited[i - 1][j] = false;
  }
}
const answer = [];
const dist = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const dfs = (x, y, h) => {
  if (x < 0 || y < 0 || x >= Number(input[0]) || y >= Number(input[0])) {
    return;
  }
  if (visited[x][y]) return;

  if (array[x][y] === 1) {
    answer[h]++;
    visited[x][y] = true;
    for (const d of dist) {
      dfs(x + d[0], y + d[1], h);
    }
  }
  return;
};
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (visited[i][j] || array[i][j] === 0) continue;
    answer.push(0);
    dfs(i, j, answer.length - 1);
  }
}
console.log(answer.length.toString());
console.log(answer.sort((a, b) => a - b).join('\n'));
