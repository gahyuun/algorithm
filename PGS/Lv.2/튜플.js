function solution(s) {
  // 가장 많이 들어간 요소가 첫번째 위치로 오면 됨
  // {{}} 되어있는 문자열을 하나씩 자르느라 힘들었음.

  const s_arr = s.split('');
  const arr = [];
  let start = false;
  let number = [];
  for (let i = 1; i < s_arr.length - 1; i++) {
    const value = s_arr[i];

    if (value === '{') start = true;
    else if (value === ',' && !start) continue;
    else if (value === ',' && start) {
      const v = Number(number.join(''));
      if (!arr[v]) {
        arr[v] = [];
        arr[v][0] = v;
        arr[v][1] = 0;
      }
      arr[v][1]++;
      number = [];
    } else if (value === '}') {
      const v = Number(number.join(''));
      if (!arr[v]) {
        arr[v] = [];
        arr[v][0] = v;
        arr[v][1] = 0;
      }
      arr[v][1]++;
      number = [];
      start = false;
    } else {
      number.push(value);
    }
  }

  arr.sort((a, b) => b[1] - a[1]);
  const answer = [];
  for (a of arr) {
    if (!a) return answer;
    answer.push(Number(a[0]));
  }
  return answer;
}
// 느낀 점: {{110,20}} 같은 문자열을 집합에 맞게 배열로 분리하려니까 어려웠다 좀 더 효율적으로 깔끔하게 짜는게 필요

// 다른 사람 풀이
const toNumbers = (str) => str.split(',').map((it) => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);

const tupleFrom = (str) =>
  str
    .slice(2, -2) // {{}} 이 두개를 제거하는 과정
    .split('},{') //},{로 자르면 숫자들만 남음
    .map((it) => toNumbers(it)) // , 로 자르고 요소들을 숫자로 변경
    .sort(accendingByLength) // 요소가 제일 짧은 걸로 정렬
    .reduce((acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))], []); // reduce를 통해 포함되지 않은 요소들로 더하기
