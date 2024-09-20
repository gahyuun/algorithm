function solution(citations) {
  const citations_obj = [];
  for (let citation of citations) {
    if (!citations_obj[citation]) citations_obj[citation] = { value: citation, num: 1 };
    else citations_obj[citation].num++;
  }
  const arr = [];
  for (let citation of citations_obj) {
    if (citation) arr.push(citation);
  }
  arr.sort((a, b) => a.value - b.value);
  let answer = 0;
  let h_index = 0;
  let num = 0;
  for (let i = 0; i < arr[arr.length - 1].value; i++) {
    // h번 이상 인용된 논문
    for (let j = 0; j < arr.length; j++) {
      if (i <= arr[j].value) {
        break;
      } else {
        num += arr[j].num;
      }
    } // i번 이상 인용된 논문 찾기
    const a = citations.length - num; // i번 이상 인용된 논문
    if (a >= i) {
      h_index = i;
    } // i번 이상 인용된 논문이 i편 이상인지
    num = 0;
  }
  return h_index;
}

/*
다른 사람 풀이
function solution(citations) {
    citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;
 */
