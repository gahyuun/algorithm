function solution(progresses, speeds) {
  let answer = [];
  let data = 0;
  let count = 1;
  let progress = 0;
  let queue = [];
  for (const i in progresses) {
    progress = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(progress);
  }
  data = queue.shift();
  while (queue.length !== 0) {
    if (data >= queue[0]) {
      count++;
      queue.shift();
    } else {
      answer.push(count);
      count = 1;
      data = queue.shift();
    }
  }
  answer.push(count);
  return answer;
}
