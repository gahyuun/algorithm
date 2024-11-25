/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function (nums, k) {
  // 증가하지 않는 부분이 k 개가 넘으면 그걸 다 인덱스에 넣음 그렇게 한 바퀴를 돌고
  // 감소하지 않는 부분이 k개가 넘으면 그걸 다 인덱스에 넣음 그렇게 한 바퀴 도는것.
  // 그러고 인덱스들이 모일텐데 두번씩 모이면 걔는 가능한 인덱스

  const indexs = new Array(nums.length).fill(0);
  let non_increase = [nums[0]];
  let non_decrease = [nums[nums.length - 1]];
  let max = nums[0];
  let min = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (non_increase.length >= k) {
      indexs[i]++;
    }
    if (!(num > max)) {
      non_increase.push(num);
      max = num;
    } // 증가하지 않으면
    else {
      non_increase = [num];
      max = num;
    } // 증가한 거
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    const num = nums[i];
    if (non_decrease.length >= k) {
      indexs[i]++;
    }
    if (!(num > min)) {
      non_decrease.push(num);
      min = num;
    } // 증가하지 않으면
    else {
      non_decrease = [num];
      min = num;
    } // 증가한 거
  }
  const answer = [];
  for (let i = 0; i < indexs.length; i++) {
    const value = indexs[i];
    if (value >= 2) {
      answer.push(i);
    }
  }
  return answer;
};
