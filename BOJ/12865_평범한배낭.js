// 정답 풀이
// 다시 풀기 !!
// 처음에 나는 접근을 백트래킹을 통해 모든 조합을 통해 확인하려고 했다. 하지만 N개의 물건이 들어갈 수도 있고 안 들어갈 수도 있기 때문에
// O(2^N)이므로 시간안에 다 풀 수 없다.
let fs = require('fs');
let path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(path).toString().split('\n');

const strToNumArr = (str) => str.split(' ').map(Number);
const [N, K] = strToNumArr(input.shift());
const items = input.map((str) => strToNumArr(str));
//물건 번호 맞추기 위해 맨 앞에 null 넣음
items.unshift(undefined);

//maxVSum[n][k]: n번까지의 물건들 중 몇 개를 골라,
//그 무게 합이 k 이하인 경우들 각각의 가치 합 중 최댓값
const maxVSum = [];
for (let i = 0; i <= N; i++) {
  maxVSum.push(Array(K + 1).fill(0));
}

for (let n = 1; n <= N; n++) {
  const [weight, value] = items[n];

  for (let k = 0; k <= K; k++) {
    //물건의 무게가 k보다 클 때
    if (k < weight) {
      maxVSum[n][k] = maxVSum[n - 1][k];
    } else {
      maxVSum[n][k] = Math.max(
        maxVSum[n - 1][k], //n번 물건 안 담는 경우
        maxVSum[n - 1][k - weight] + value //n번 물건 담는 경우
      );
    }
  }
}

console.log(maxVSum[N][K]);

/**
 * N번까지의 물건들 중에 물건들을 최적으로 고른 집합을 계속해서 구하는 것
 * maxVSum[n][k]는 n번까지의 물건들 중 최적으로 고른 물건들의 가치합 (무게 합이 k 이하이면서 가치 합이 최대인)
 * n이 1일때 6번 물건까지만 담을 수 있을 때 k무게일때 최고 가치합
 * n이 1일때 0~ 5kg까지는 아무것도 담을 수 없음 지금 담을 물품의 무게를 담지도 못하기 때문에 이전의 물품까지 담을 수 있을 때 최적이랑 똑같음
 * 6kg일때는 n번 물건을 안담았을 때 최적합과 n번 물건까지 담았을 때 최적합을 비교
 * n이 1일때는 이전에 상품이 없기 때문에 그래도 상품을 넣었을 때 가장 가치가 높음
 * n이 2일때는 6과 4를 담을 수 있으니까
 * 일단 4kg 전까지는 해당 물품을 담을 수 없어서 그전까지가 최적임
 * 4kg가 되었을 때부터는 4kg을 담는게 최적임 이후에는 6까지 담았을 때가 최적.
 * n이 3일 때는 3kg, 4kg, 6kg까지 가치가 제일 높다가 7kg일 때는 6kg만 담는거보다 4kg가치에다가 3kg 가치가 더 높다.
 */
