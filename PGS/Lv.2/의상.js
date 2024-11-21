// 조합은 백트래킹으로 하면 되겠지라고 생각을 했는데, 알고보니 다른 방법이었고 문제를 정확히 읽고 무조건 알고리즘이랑 엮지말고 어떤 식으로 접근할건지 필요
function solution(clothes) {
  const clothes_obj = {};
  for (let [itei, kind] of clothes) {
    if (clothes_obj[kind]) {
      clothes_obj[kind].push(itei);
    } else {
      clothes_obj[kind] = [];
      clothes_obj[kind].push(itei);
    }
  }
  const keys = Object.keys(clothes_obj);
  console.log(clothes_obj);

  //   조건부 확률 : 두 확률이 동시에 일어날 확률은 두 확률의 곱과 같다.
  // 문제 조건을 보면 최소 한개의 의상을 입으면 된다고 되어 있습니다.
  // 의상의 종류가 2개일 때 1개만 입고 나머지는 안 입는 경우도 성립된다. (예제 1 설명 부분 참고)
  // 최소 한개의 의상을 입어야 하므로, 전부 다 안 입는 경우는 제외한다.

  let count = [];
  for (let j = 0; j < keys.length; j++) {
    console.log(clothes_obj[keys[j]]);
    if (clothes_obj[keys[j]].length === 1) {
      count.push(2);
    } else {
      count.push(clothes_obj[keys[j]].length + 1);
    }
  }
  const answer = count.reduce((a, b) => a * b);
  return answer - 1;
}
