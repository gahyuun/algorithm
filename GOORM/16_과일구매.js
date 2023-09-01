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
  let array = [];
  const [n, k] = input[0].split(' ').map(Number);
  for (let i = 1; i < input.length; i++) {
    array.push(input[i].split(' ').map(Number));
  }
  array.sort((a, b) => {
    let a_ = parseInt(a[1] / a[0]);
    let b_ = parseInt(b[1] / b[0]);
    if (a_ > b_) return -1;
    else if (a_ < b_) return 1;
    else {
      if (a[1] > b[1]) return -1;
      return 1;
    }
  });

  let money = k;
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (money - array[i][0] >= 0) {
      answer += array[i][1];
      money -= array[i][0];
    } else if (money >= 1) {
      for (let j = 0; j < array[i][0]; j++) {
        if (money !== 0) {
          answer += parseInt(array[i][1] / array[i][0]);
          money -= 1;
        }
      }
    }
  }

  console.log(answer);
});
