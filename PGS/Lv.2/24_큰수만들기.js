function solution(number, k) {
  const numbers = number.split('').map(Number);
  let answer = '';
  let len = numbers.length - k; //4
  let index = 0;
  while (len > 0) {
    let max = -1;
    let maxIndex = -0;
    for (let i = index; i < numbers.length - len + 1; i++) {
      const n = numbers[i];
      if (n > max) {
        maxIndex = i;
        max = n;
      }
    } //for문
    index = maxIndex + 1;
    len--;
    answer += max.toString();
  }
  return answer;
}
