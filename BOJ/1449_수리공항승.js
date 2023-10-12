let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');
const [n, l] = input[0].split(' ').map(Number);
const ar = input[1].split(' ').map(Number);
ar.sort((a, b) => a - b);
let tape = 0;
let answer = 0;
for (let i = 0; i < ar.length; i++) {
  const num = ar[i];
  if (tape > num) {
    continue;
  }
  const start = num - 0.5;
  tape = start + l;
  answer++;
}
console.log(answer);
