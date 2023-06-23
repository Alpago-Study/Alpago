// [문제 이름]
// : 체육복

// [문제 설명]
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게
// 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로
// 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만
// 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한
// 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온
// 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을
//  return 하도록 solution 함수를 작성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42862

function left(n, lost, reserve) {
  // 먼저 전체 학생 수에서 잃어버린 학생 수를 빼줌
  let answer = n - lost.length;

  // 잃어버린 학생 순환
  for (i of lost) {
    // reserve에 잃어버린 학생 -1 (앞에 학생)이 있으면 answer++ 후 reserve에서 지워줌
    if (reserve.find((ele) => ele === i - 1)) {
      answer++;
      reserve = reserve.filter((ele) => ele !== i - 1);
    }
    // reserve에 잃어버린 학생 +1 (뒤에 학생)이 있으면 answer++후 reserve에서 지워줌
    else if (reserve.find((ele) => ele === i + 1)) {
      answer++;
      reserve = reserve.filter((ele) => ele !== i + 1);
    }
  }
  return answer;
}

function right(n, lost, reserve) {
  let answer = n - lost.length;
  for (i of lost) {
    if (reserve.find((ele) => ele === i + 1)) {
      answer++;
      reserve = reserve.filter((ele) => ele !== i + 1);
    } else if (reserve.find((ele) => ele === i - 1)) {
      answer++;
      reserve = reserve.filter((ele) => ele !== i - 1);
    }
  }
  return answer;
}

function solution(n, lost, reserve) {
  // 도난당한 사람 중 여분 갖고 온 사람 담기 위한 변수
  const both = [];
  lost.forEach((ele) => {
    // lost 원소 중 reserve에 있는 원소가 있다면 both에 push
    if (reserve.includes(ele)) {
      both.push(ele);
    }
  });
  // lost에서 both에 있는 원소 제거
  lost = lost.filter((ele) => !both.includes(ele));
  // reserve에서 both에 있는 원소 제거
  reserve = reserve.filter((ele) => !both.includes(ele));

  // lost와 reserve를 sorting
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 왼쪽(작은거) 먼저 가져왔을때랑 오른쪽(큰거) 먼저 가져왔을떄 중 큰 값을 리턴
  return Math.max(left(n, lost, reserve), right(n, lost, reserve));
}
