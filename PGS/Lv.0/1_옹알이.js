function solution(babbling) {
  let answer = 0;

  babbling.forEach((element) => {
    let isAya = false;
    let isYe = false;
    let isWoo = false;
    let isMa = false;
    if (element.includes('aya')) {
      isAya = true;
    }
    if (element.includes('ye')) {
      isYe = true;
    }
    if (element.includes('woo')) {
      isWoo = true;
    }
    if (element.includes('ma')) {
      isMa = true;
    }
    if (isAya) {
      element = element.replace('aya', '');
    }
    if (isYe) {
      element = element.replace('ye', '');
    }
    if (isWoo) {
      element = element.replace('woo', '');
    }
    if (isMa) {
      element = element.replace('ma', '');
    }
    if (element.length === 0) {
      answer++;
    }
  });
  return answer;
}

//정규식으로 해결
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
