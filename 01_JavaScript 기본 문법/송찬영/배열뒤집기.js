function solution(num_list) {
  var answer = [];
  for (let i = 0; i < num_list.length; i++) {
    answer.unshift(num_list[i]);
  }
  return answer;
}
