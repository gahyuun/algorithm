const check = (arr) => {
  let num = 0;
  for (let i of arr) {
    if (i === '1') num++;
  }
  return num;
};

function solution(n) {
  const s = [...n.toString(2)];
  const n_num = check(s);
  for (let i = n + 1; i < 1000000; i++) {
    const arr = [...i.toString(2)];
    if (check(arr) === n_num) return i;
  }
}

// 다른사람 풀이
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n, a + 1);
}
