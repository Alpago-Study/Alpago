// [문제 이름]
// : 체육복

// [문제 설명]
// : 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
//   전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42862#qna

function solution(n, lost, reserve) {
  let total = n;

  // 예외 처리 : 여벌 체육복을 가져온 학생의 번호와 lost 학생의 번호가 일치하는 경우 => filter로 제거하고 정렬해준다
  let filteredLost = lost.filter((cur) => !reserve.includes(cur)).sort();
  let filteredReserve = reserve.filter((cur) => !lost.includes(cur)).sort();

  for (let i = 0; i < filteredReserve.length; i++) {
    let sub = filteredReserve[i] - 1;
    let add = filteredReserve[i] + 1;

    // 여벌의 체육복을 빌려줄 수 있는 학생의 번호에 1를 빼거나 더한 값이 잃어버린 학생의 번호와 일치하지 않다면 filtering 하기
    if (filteredLost.includes(sub)) {
      filteredLost = filteredLost.filter((el) => el !== sub);
    } else if (filteredLost.includes(add)) {
      filteredLost = filteredLost.filter((el) => el !== add);
    }
  }

  // 전체 학생 수 - 체육복을 잃어버린 학생 = 체육을 들을 수 있는 최대 수의 학생
  return total - filteredLost.length;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
