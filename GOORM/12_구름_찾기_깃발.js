const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let count = 0;
  const [n, k] = input[0].split(' ').map(Number);
  const array = [];
  for (let i = 1; i < n + 1; i++) {
    array.push(input[i].split(' ').map(Number));
  }
  function possible(x, y) {
    let cnt = 0;
    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        if (array[i] === undefined) continue;
        if (array[i][j] === 1) {
          if (cnt === k) return false;
          cnt++;
        }
      }
    }
    if (cnt !== k) return false;
    return true;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] === 1) continue;
      if (possible(i, j)) count++;
    }
  }
  console.log(count);
});
