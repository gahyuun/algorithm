let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

// 내가 누구의 화살을 받을 것인가 관점으로 생각하기
const stack = [];
input = input[0].split(' ').map(Number);
for (let i = 0; i < input.length; i++) {
  stack.push({ index: i, value: input[i] });
}
let i = stack.length - 1;
const signal = [];
const answer = new Array(stack.length).fill(0);
while (stack.length > 1) {
  const { index, value } = stack.pop(); // stack 찾고
  if (stack[stack.length - 1].value >= value) {
    answer[index] = stack[stack.length - 1].index + 1;
    while (signal.length > 0) {
      if (stack[stack.length - 1].value >= signal[signal.length - 1].value) {
        answer[signal[signal.length - 1].index] = stack[stack.length - 1].index + 1;
        signal.pop();
      } else break;
    }
  } // 못 받은 애들 순서대로 확인
  else {
    signal.push({ index, value });
  }
}

console.log(answer.join(' '));
