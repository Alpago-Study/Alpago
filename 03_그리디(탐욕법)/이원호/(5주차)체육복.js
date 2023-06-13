// [문제 이름]
// : 체육복

// [문제 설명]
// : 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
//  전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  // (reserve 처리하기 전) 현재 체육수업을 들을 수 있는 학생 수를 result에 저장
  // 밑의 lost 배열과 reserve 배열을 확인해가며, 조건 만족 시 result에 +1 씩 해줄거임
  let result = n - lost.length;

  // 일부 테스트케이스(13,18 ) 통과를 위해 lost, reserve 배열 정렬해줘야함
  lost.sort();
  reserve.sort();

  // 도난 당한 학생 중에서 여분의 체육복을 가진 학생 찾아 제외
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 도난당한 학생이 여분의 체육복을 가지고 있는 경우를 확인
      if (lost[i] === reserve[j]) {
        // 여분이 있는 경우, lost, reserve 배열에서 삭제
        lost.splice(i, 1);
        reserve.splice(j, 1);
        result++; // 체육수업에 들을수 있는 학생수 +1
        i--; // 다음 도난 당한 학생 처리를 위해 인덱스 조정
        j--;
      }
    }
  }

  // 도난 당한 학생들이 체육복을 빌리는 과정
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // 도난당한 학생 양쪽에 reserve를 가진 학생이 있는지 확인하는 조건문
      if (lost[i] + 1 === reserve[j] || lost[i] - 1 === reserve[j]) {
        // 도난당한 학생 양쪽에 여분이 있는경우 lost, reserve 배열에서 삭제
        lost.splice(i, 1);
        reserve.splice(j, 1);
        result++; // 체육수업에 들을수 있는 학생수 +1
        i--; // 다음 반복문 처리를 위해 인덱스 조정
        j--;
      }
    }
  }

  return result;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
