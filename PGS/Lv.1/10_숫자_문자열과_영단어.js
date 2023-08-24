function solution(s) {
  let answer = [];
  let str = [];
  s = s.split('');
  let words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (const element of s) {
    if (Number(element) || Number(element) === 0) {
      answer.push(Number(element));
    } // 숫자면
    else {
      str.push(element);
      let index = words.indexOf(str.join(''));
      if (index !== -1) {
        answer.push(index);
        str = [];
      }
    } // 문자열이면
  }
  return Number(answer.join(''));
}
