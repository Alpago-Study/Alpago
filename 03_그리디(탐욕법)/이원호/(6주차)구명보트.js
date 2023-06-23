// [문제 이름]
// : 구명보트

// [문제 설명]
// : 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
//  예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
//  구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
//  사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let sortedPeople = people.sort((a, b) => b - a); // 사람들의 몸무게를 내림차순으로 정렬
  let count = 0; // 필요한 구명보트 개수를 저장할 변수

  let left = 0; // 가장 가벼운 사람의 인덱스
  let right = sortedPeople.length - 1; // 가장 무거운 사람의 인덱스

  while (left <= right) {
    if (sortedPeople[left] + sortedPeople[right] <= limit) {
      // 가장 가벼운 사람과 가장 무거운 사람이 함께 탈 수 있는 경우
      left++; // 가장 무거운 사람과 가벼운 사람 구출
      right--;
    } else {
      // 가장 가벼운 사람과 가장 무거운 사람이 함께 탈 수 없는 경우
      left++; // 가장 무거운사람 혼자 구출
    }
    count++; // 구명보트 개수 증가
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
console.log(solution([90, 60, 40, 40, 30, 50], 100));
