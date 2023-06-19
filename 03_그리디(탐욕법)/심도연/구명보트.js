// [문제 이름]
// : 구명보트

// [문제 설명]
// : 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;
  let arr = people.sort((a, b) => a - b);
  // 50 50 70 80

  while (arr.length) {
    if (arr[0] + arr[arr.length - 1] <= limit) {
      arr.shift(); // 앞에도 없어졌고
      arr.pop(); // 뒤에도 없어졌오
      // 50 70
    } else {
      arr.pop();
    }
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
