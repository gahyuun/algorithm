function solution(participant, completion) {
  let answer = '';
  let p = {};
  let c = {};
  let same = {};
  participant.map((el) => {
    if (p[el] === undefined) {
      p[el] = 1;
    } else {
      p[el] += 1;
    }
  });
  completion.map((el) => {
    if (c[el] === undefined) {
      c[el] = 1;
    } else {
      c[el] += 1;
    }
  });
  participant.map((el) => {
    if (p[el] !== c[el]) {
      answer = el;
    }
  });
  return answer;
}
