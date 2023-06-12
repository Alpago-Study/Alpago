// [문제 이름]
// : 체육복

// [문제 설명]
// : 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

const solution = (n, lost, reserve) => {
  // 1. 중복을 제거한 새로운 배열 생성
  // : 체육복 여벌이 있지만, 동시에 도난을 당한 케이스
  // ex) [2, 3] [3, 4]
  // ⭐ 정렬을 해주지 않으면 실패하는 테스트 케이스 있음 ⭐
  const filteredLost = lost.filter((lost) => !reserve.includes(lost)).sort();
  const filteredReserve = reserve
    .filter((reserve) => !lost.includes(reserve))
    .sort();

  // 2. 체육복을 빌려 받는 학생만 담은 배열 생성
  const studentGetCloth = filteredLost.filter((lost) => {
    // 여벌이 있는 배열 안에 체육복을 도난당한 학생 번호 - 1 혹은 + 1이 존재하는지 판단
    // ⭐ 존재하지 않으면 undefined를 반환하여 저장되지 않음 ⭐
    return filteredReserve.find((reserve, index) => {
      const canGetCloth = reserve === lost - 1 || reserve === lost + 1;

      // 2-1. 만약 존재하는 경우 체육복을 빌려주었으므로 여벌이 있는 배열에서 제거해야 함
      if (canGetCloth) delete filteredReserve[index];

      return canGetCloth;
    });
  });

  // 3. 전체 학생 수 - (체육복을 도난당한 학생 수 - 체육복을 빌려 받는 학생 수)를 반환
  // : 체육복을 도난당한 학생 수 - 체육복을 빌려 받는 학생 수는 결국 체육복을 빌려 받지 못하는 학생 수이기 때문
  return n - (filteredLost.length - studentGetCloth.length);
};

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(4, [2, 3], [3, 4]));
console.log(solution(3, [3], [1]));
