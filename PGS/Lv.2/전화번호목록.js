// 내 풀이
function solution(phone_book) {
  // 첫 번째가 같은 애들끼리 묶고, 두번째 요소가 같은 애들끼리 튜플로 묶은 이후에 배열 중 한 요소가 더 이상 요소가 없을 때 return false를 진행
  // 예를 들어 12와 123 은 1이 같기에 묶이고, 2가 같기에 묶이고 그러다가 12 는 더 이상 요소가 없기에 return false
  // 한 번에 통과하는 연습 필요
  const array = [];

  for (let i = 0; i < phone_book.length; i++) {
    const phone = phone_book[i].split('').map(Number);
    if (!array[phone[0]]) array[phone[0]] = [];
    array[phone[0]].push(phone);
  }

  let answer = true;

  const group = (arr, index) => {
    if (arr === undefined || arr.length < 2) return;
    const new_arr = [];
    for (let a of arr) {
      if (a[index] === undefined) {
        answer = false;
        return;
      } // 겹치는게 있을 때 ( 한 전화번호가 끝났을 때)
      if (!new_arr[a[index]]) new_arr[a[index]] = [];
      new_arr[a[index]].push(a);
    }
    for (let i = 0; i <= 9; i++) {
      group(new_arr[i], index + 1);
    }
  };
  for (let value of array) {
    if (value === undefined || value.length < 2) continue;
    group(value, 1);
  }
  return answer;
}

// 다른사람 풀이
// 아래 풀이를 생각하긴 했지만 시간 복잡도에서 실패할 것 같아 도전하지 않았지만 결과적으로 내 방식보다 훨씬 빠르고 효율적이다
// phone의 개수가 100,000이므로 1초라고 가정했을 때 O(NlogN) 알고리즘만 설계하면 된다
// 아래 코드는 (M=100,000 N=20) sort O(MlogM) , some O(100,000)*O(20) 이므로 시간 복잡도가 O(200,000)로 1초 안에 끝날 수 있다.
// 가장 간단한 방법부터 생각하고 시간 오래 걸릴 것 같다고 짐작하는게 아닌 시간 복잡도를 따져볼 필요가 있음
function solution(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]); // startsWith 자체는 o(n)
  });
}
