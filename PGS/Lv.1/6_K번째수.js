function solution(array, commands) {
  let answer = [];
  for (let command of commands) {
    const [start, end, index] = command;
    let dataArray = array.slice(start - 1, end);
    dataArray.sort((a, b) => a - b);
    answer.push(dataArray[index - 1]);
  }
  return answer;
}
