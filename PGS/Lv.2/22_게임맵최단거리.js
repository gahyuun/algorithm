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
function solution(maps) {
  const n = maps[0].length;
  const m = maps.length;
  function bfs() {
    queue = new Queue();
    queue.enqueue([m - 1, n - 1, 1]);
    maps[m - 1][n - 1] = 0;
    while (queue.getLength() != 0) {
      let [a, b, t] = queue.dequeue();
      if (a === 0 && b === 0) {
        return t;
      }
      for (let c of [
        [a - 1, b],
        [a + 1, b],
        [a, b - 1],
        [a, b + 1],
      ]) {
        const [i, j] = c;
        if (i < 0 || i >= m || j < 0 || j >= n) continue;
        if (maps[i][j] === 0) continue;
        maps[i][j] = 0;
        queue.enqueue([i, j, t + 1]);
      }
    }
  }
  const answer = bfs();
  if (answer === undefined) return -1;
  return answer;
}
