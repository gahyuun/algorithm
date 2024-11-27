let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().trim().split('\n');

let answer = [];
const backTracking = (visited, s, selected, index) => {
  if (selected.length === 6) {
    answer.push(selected.join(' '));
  }
  for (let i = index; i < s.length; i++) {
    if (visited[i]) continue;
    selected.push(s[i]);
    visited[i] = true;
    backTracking(visited, s, selected, i + 1);
    selected.pop();
    visited[i] = false;
  }
};
let result = '';
for (let i = 0; i < input.length - 1; i++) {
  const [_, ...s] = input[i].split(' ').map(Number);
  const visited = new Array(s.length).fill(false);
  backTracking(visited, s, [], 0);
  result += answer.join('\n');
  answer = [];
  result += '\n' + '\n';
}
console.log(result.trim());
