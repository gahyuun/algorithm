function solution(n, lost, reserve) {
  let lost_student_length = lost.length;
  let lost_temp = lost;
  lost = lost.filter((el) => !reserve.includes(el)); // 도난 당했지만 여벌을 안 가져온 학생
  reserve = reserve.filter((el) => !lost_temp.includes(el));
  let involve_student = [];
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < lost.length; i++) {
    let a = lost[i];
    let first_reserve_index = reserve.indexOf(a - 1);
    let second_reserve_index = reserve.indexOf(a + 1);
    if (first_reserve_index !== -1) {
      involve_student.push(a);
      reserve.splice(first_reserve_index, 1);
    } else if (second_reserve_index !== -1) {
      involve_student.push(a);
      reserve.splice(second_reserve_index, 1);
    }
  }
  let a = lost_student_length - lost.length;
  //도난 당했지만 여벌을 가져온 애들
  let b = involve_student.length; // 여벌 가져온 걸로 체육에 참여할 수 있는 애들
  let answer = n - (lost_student_length - (a + b));
  return answer;
}
