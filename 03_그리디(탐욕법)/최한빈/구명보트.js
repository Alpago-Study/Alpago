// [문제 이름]
// : 구명보트

// [문제 설명]
// 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

// 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

// 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  var answer = 0;
  // 오름차순으로 정렬
  people.sort((a, b) => a - b);
  // 시작점과 끝점을 양 끝으로 셋팅
  // 시작점은 가장 가벼운 사람, 끝점은 가장 무거운 사람
  let start = 0;
  let end = people.length - 1;
  // 시작점이 끝점을 넘어가면 반복문 멈춘다
  while (start <= end) {
    // 만약 시작점과 끝점을 합한 값이 limit를 넘지 않으면 같이 태워 보냄
    if (people[start] + people[end] <= limit) {
      answer++;
      // 시작점과 끝점은 같이 타서 나갔으니까 앞으로 1칸씩 땡겨줌
      start++;
      end--;
    } else {
      // 만약 합한 값이 limit를 넘어버리면 무거운 사람만 먼저 보낸다.
      answer++;
      end--;
    }
  }

  // let last = people.pop();

  // while (people.length > 0) {
  //   // 1. 가장 무거운사람 고르고 같이 탈 수 있는 사람 탐색, answer 1 올려줌
  //   let last = people.pop();
  //   answer++;
  //   for (let i = people.length - 1; i >= 0; i--) {
  //     // 2. 만약 같이 탔을 경우 Limit를 넘지 않는 사람이면 같이 타고 가게함
  //     let first = people.shift();
  //     if (last + first <= limit) {
  //       break;
  //     } else {
  //       people.push(first);
  //     }
  //   }
  // }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([100, 90, 80, 10], 110));

console.log(solution([70, 50, 80], 100));

/*
성능 테스트 실패한 것들: splice, slice, shift-push
*/
