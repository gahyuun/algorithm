class PrioirtyQueue {
  elements = [];

  deq() {
    if (this.size() === 1) {
      const first = this.elements[0];
      this.elements.pop();
      return first;
    }
    const first = this.elements[0];
    let last = this.elements.pop();
    this.elements[0] = last; // 첫번째꺼 빼고 마지막꺼 넣고
    let current = 0;
    while (current < this.size()) {
      let smallest = current;
      let left = current * 2 + 1;
      let right = current * 2 + 2;

      if (left < this.size() && this.elements[left] < this.elements[smallest]) {
        smallest = left;
      }
      if (right < this.size() && this.elements[right] < this.elements[smallest]) {
        smallest = right;
      }

      if (smallest === current) break;
      this.swap(smallest, current);

      current = smallest;
    }

    return first;
  }
  enq(value) {
    this.elements.push(value);
    let current = this.size() - 1;
    while (true) {
      let parent = Math.floor((current - 1) / 2);
      if (this.elements[parent] > this.elements[current]) {
        this.swap(parent, current);
        current = parent;
      } else {
        break;
      } // 더 이상 비교 안하고 멈추기
    }
  }
  size() {
    return this.elements.length;
  }
  peek() {
    return this.elements[0];
  }
  swap(a, b) {
    const temp = this.elements[a];
    this.elements[a] = this.elements[b];
    this.elements[b] = temp;
  }
}
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const queue = new PrioirtyQueue();

for (let v of input) {
  queue.enq(Number(v));
}
let answer = 0;
while (queue.size() > 1) {
  const a = queue.deq();
  const b = queue.deq();
  answer += a + b;
  queue.enq(a + b);
}
console.log(answer);
