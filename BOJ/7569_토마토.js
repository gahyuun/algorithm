class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 안 익은게 토마토 없는 칸으로 둘러쌓여있으면 -1, 토마토가 모두 익어있으면 0
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');

//  M은 상자의 가로 칸의 수, N은 상자의 세로 칸의 수 H는 높이
// 토마토를 일짜로 하는거 1이 적혀있으면 1일차, 2가 적히면 2일차에 익은거 그래서 최종 일자 -1 하면 됨
const tomatos = [];
const [M, N, H] = t.split(' ').map(Number);
for (let i = 0; i < H; i++) {
  tomatos[i] = [];
  for (let j = 0 + N * i; j < 0 + N * (i + 1); j++) {
    tomatos[i].push(input[j].split(' ').map(Number));
  }
}

const dists = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

const queue = new Queue();
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatos[i][j][k] === 1) queue.enqueue([i, j, k]);
    }
  }
}

while (true) {
  if (queue.getLength() === 0) {
    break;
  }
  const [i, j, k] = queue.dequeue();
  for (let dist of dists) {
    if (
      i + dist[0] < 0 ||
      i + dist[0] >= H ||
      k + dist[2] < 0 ||
      k + dist[2] >= M ||
      j + dist[1] < 0 ||
      j + dist[1] >= N
    ) {
      continue;
    }
    if (tomatos[i + dist[0]][j + dist[1]][k + dist[2]] === 0) {
      tomatos[i + dist[0]][j + dist[1]][k + dist[2]] = tomatos[i][j][k] + 1;
      queue.enqueue([i + dist[0], j + dist[1], k + dist[2]]);
    }
  }
}
let max = 0; // 처음부터 익은 상태
const getAnswer = () => {
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (tomatos[i][j][k] === 0) {
          max = 0; // 모두 익지 못한 상태
          return;
        }
        max = Math.max(max, tomatos[i][j][k]);
      }
    }
  }
};
getAnswer();
console.log(max - 1);
