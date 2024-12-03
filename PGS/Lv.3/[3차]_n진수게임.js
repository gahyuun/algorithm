class Queue {
  constructor() {
    this.list = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enq(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.list[this.tailIndex] = arr[i];
      this.tailIndex++;
    }
  }
  deq() {
    const value = this.list[this.headIndex];
    delete this.list[this.headIndex];
    this.headIndex++;
    return value;
  }
  empty() {
    return this.headIndex === this.tailIndex;
  }
}

function solution(n, t, m, p) {
  let count = 0;
  const answer = [];
  const queue = new Queue();
  let number = 0;
  queue.enq(number.toString(n).split(''));
  number++;
  while (count < t) {
    for (let i = 1; i <= m; i++) {
      if (queue.empty()) {
        queue.enq(number.toString(n).split(''));
        number++;
      }
      const v = queue.deq();

      if (i === p) {
        count++;
        if (Number(v) == NaN) {
          answer.push(v.toUpperCase());
        } else answer.push(v);
      } // 튜브가 말할 진수
    }
  }
  return answer.join('').toUpperCase();
}
