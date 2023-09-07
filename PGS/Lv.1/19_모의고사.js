function solution(answers) {
  const first_answer = [1, 2, 3, 4, 5];
  let first_score = 0;
  let first_index = 0;
  const second_answer = [2, 1, 2, 3, 2, 4, 2, 5];
  let second_score = 0;
  let second_index = 0;
  const third_answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let third_score = 0;
  let third_index = 0;
  answers.map((answer) => {
    if (first_index >= first_answer.length) first_index = 0;
    if (second_index >= second_answer.length) second_index = 0;
    if (third_index >= third_answer.length) third_index = 0;
    if (answer === first_answer[first_index]) first_score++;

    if (answer === second_answer[second_index]) second_score++;

    if (answer === third_answer[third_index]) third_score++;

    second_index++;
    first_index++;
    third_index++;
  });

  let array = [
    { name: 1, score: first_score },
    { name: 2, score: second_score },
    { name: 3, score: third_score },
  ];
  array.sort((a, b) => b.score - a.score);
  let answer = [array[0].name];
  if (array[1].score === array[0].score) {
    answer.push(array[1].name);
    if (array[1].score === array[2].score) {
      answer.push(array[2].name);
    }
  }
  return answer;
}
