// 섬의 부모를 찾는 함수
const getParent = (parent, c) => {
  if (parent[c] === c) return c;
  return (parent[c] = getParent(parent, parent[c]));
};
// 두 섬의 부모를 하나로 합치는 함수
const unionParent = (parent, c1, c2) => {
  const [n1, n2] = [getParent(parent, c1), getParent(parent, c2)];
  if (n1 < n2) return (parent[n2] = n1);
  else return (parent[n1] = n2);
};
// 두 섬의 동일 부모 여부를 조회하는 함수
const findParent = (parent, c1, c2) => {
  const [n1, n2] = [getParent(parent, c1), getParent(parent, c2)];
  return n1 === n2;
};

const solution = (n, costs) => {
  let answer = 0;
  const parent = new Array(n).fill(null).map((_, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  for (const cost of costs) {
    // 만약 두 섬의 부모가 다른 케이스: 사이클이 형성되지 않은 상태
    if (!findParent(parent, cost[0], cost[1])) {
      answer += cost[2]; // 가중치를 더해준다 (정렬했기에 최소값이다)
      unionParent(parent, cost[0], cost[1]); // 부모를 합쳐준다 (사이클 생성)
    }
  }
  return answer;
};
