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
function solution(numbers, target) {
  const queue = new Queue();
  let count = 0;
  queue.enqueue(0);
  for (let i = 0; i < numbers.length; i++) {
    const ar = [];
    while (queue.getLength() !== 0) {
      const a = queue.dequeue();
      ar.push(a);
    }
    for (let a of ar) {
      queue.enqueue(a - numbers[i]);
      queue.enqueue(a + numbers[i]);
    }
  }
  while (queue.getLength() !== 0) {
    const a = queue.dequeue();
    if (a === target) {
      count++;
    }
  }
  return count;
}
