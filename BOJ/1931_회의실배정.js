const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const times = [];
for (let i = 1; i < input.length; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  times.push({ start, end });
}
times.sort((a, b) => {
  if (a.end === b.end) {
    return a.start - b.start;
  }
  return a.end - b.end;
});
let endTime = times[0].end;
let count = 1;
for (let i = 1; i < times.length; i++) {
  if (times[i].start >= endTime) {
    count++;
    endTime = times[i].end;
  }
}
console.log(count);
