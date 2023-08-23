// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = 0;
  let count = 0;
  for await (const line of rl) {
    input = Number(line);
    let pain = [14, 7, 1];
    for (let i = 0; i < pain.length; i++) {
      let value = parseInt(input / pain[i]);
      if (value !== 0) {
        input = input % pain[i];
        count += value;
      }
    }
    console.log(count);
    rl.close();
  }

  process.exit();
})();
