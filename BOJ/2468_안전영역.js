// n은 100, 총 갯수 10000, 높이번 돌리면 100
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const array = [];
const visited = [];
let max_rain = 0;
for (let i = 0; i < input.length; i++) {
  array.push(input[i].split(' ').map(Number));
  max_rain = Math.max(...array[array.length - 1]);
  visited[i] = new Array(array[i].length).fill(0);
}

const dists = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
const dfs = (i, j, rain) => {
  if (visited[i][j] >= rain) {
    return;
  }
  if (array[i][j] <= rain) return;
  visited[i][j] = rain;

  for (let dist of dists) {
    if (dist[0] + i >= 0 && dist[0] + i < array.length && dist[1] + j >= 0 && dist[1] + j < array.length)
      dfs(i + dist[0], j + dist[1], rain);
  }
};

let answer = 1;

for (let r = 1; r < max_rain; r++) {
  let a = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (visited[i][j] >= r) {
        continue;
      }
      if (array[i][j] <= r) continue;
      dfs(i, j, r);
      a++;
    }
  }
  answer = Math.max(a, answer);
}
console.log(answer);
