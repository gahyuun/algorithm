class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
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

let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
let index = 0;
function bfs(graph, i, j, visited, w, h) {
  queue = new Queue();
  queue.enqueue([i, j]);
  visited[i][j] = true;
  while (queue.getLength() != 0) {
    let [i, j] = queue.dequeue();

    for (value of [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j + 1],
      [i - 1, j - 1],
      [i - 1, j + 1],
      [i + 1, j - 1],
    ]) {
      const [a, b] = value;
      if (a < 0 || a >= h || b < 0 || b >= w) continue;
      if (visited[a][b]) continue;
      if (graph[a][b] === 1) {
        visited[a][b] = true;
        queue.enqueue([a, b]);
      }
    }
  }
}

while (true) {
  const [w, h] = input[index].split(' ').map(Number);
  if (w === 0 && h === 0) break;
  index++;
  const graph = [];
  for (let i = index; i < index + h; i++) {
    graph.push(input[i].split(' ').map(Number));
  }
  let visited = [];
  for (let i = 0; i < h; i++) {
    let array = [];
    for (let j = 0; j < w; j++) {
      array.push(false);
    }
    visited.push(array);
  }
  let answer = 0;
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < w; j++) {
      if (visited[i][j]) continue;
      if (graph[i][j] === 0) {
        visited[i][j] = true;
        continue;
      }
      answer++;
      bfs(graph, i, j, visited, w, h);
    }
  }
  index = index + h;
  console.log(answer);
}
