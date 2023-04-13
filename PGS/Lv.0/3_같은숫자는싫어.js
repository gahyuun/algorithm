function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  arr.reduce((acu, value, index) => {
    if (arr[index - 1] !== value) {
      answer.push(value);
    }
  });

  return answer;
}
