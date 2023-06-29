// [문제 이름]
// : 수 찾기

// [문제 설명]
// : N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1920

const solution = (numList, targets) => {
  // 1. 결과 배열 생성
  const results = [];

  // 2. 이진 탐색을 위한 오름차순 정렬 수행
  numList.sort((a, b) => a - b);

  // 3. 찾을 수가 담긴 배열을 순회
  targets.forEach((target) => {
    // 3-1. 시작점, 끝점, 결과 값 초기 설정
    let start = 0;
    let end = numList.length - 1;
    let result = 0;

    // 4. 시작점이 끝점보다 작을 때까지 반복
    while (start <= end) {
      // 4-1. 중간점 설정
      let mid = Math.floor((start + end) / 2);

      // 4-2. 만약 중간 값보다 찾을 수가 작다면 끝점을 중간점 - 1로 설정
      if (target < numList[mid]) {
        end = mid - 1;
        // 4-3. 만약 중간 값보다 찾을 수가 크다면 시작점을 중간점 + 1로 설정
      } else if (target > numList[mid]) {
        start = mid + 1;
        // 4-4. 만약 중간 값과 찾을 수가 동일하다면 수를 찾는 데 성공했으므로 결과 값을 1로 변경 후 종료
      } else {
        result = 1;
        break;
      }
    }

    // 5. 결과 배열에 결과 값 삽입
    results.push(result);
  });

  // 6. 결과 배열을 줄바꿈 문자와 함께 문자열로 변환하여 반화
  return results.join('\n');
};

console.log(solution([4, 1, 5, 2, 3], [1, 3, 7, 9, 5]));
