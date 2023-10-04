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
const [n, m, v] = input[0].split(' ').map(Number);
const graph = [];
let visited = Array(n + 1).fill(false);
const dfs_answer = [v];
const bfs_answer = [];
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (graph[a] === undefined) {
    graph[a] = [];
  }
  if (graph[b] === undefined) {
    graph[b] = [];
  }
  graph[a].push(b);
  graph[b].push(a);
}
for (let a of graph) {
  if (Array.isArray(a)) {
    a.sort((a, b) => a - b);
  }
}
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  if (graph[v] === undefined) {
    return;
  }
  for (i of graph[v]) {
    if (!visited[i]) {
      visited[i] = true;
      dfs_answer.push(i);
      dfs(graph, i, visited);
    }
  }
}

function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;
  while (queue.getLength() != 0) {
    let v = queue.dequeue();
    bfs_answer.push(v);
    if (graph[v] === undefined) {
      return;
    }
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}
dfs(graph, v, visited);
console.log(dfs_answer.join(' '));
visited = Array(n + 1).fill(false);
bfs(graph, v, visited);
console.log(bfs_answer.join(' '));
