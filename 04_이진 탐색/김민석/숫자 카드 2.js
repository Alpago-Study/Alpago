// [문제 이름]
// : 숫자 카드 2

// [문제 설명]
// : 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/10816

// ✅ 파라메트릭 서치 이용 ✅

// 범위 내의 가장 왼쪽 인덱스 반환
const lowerBound = (arr, target, start, end) => {
  // 시작 인덱스가 마지막 인덱스보다 작을 때까지
  while (start < end) {
    // 중간 인덱스 설정
    let mid = Math.floor((start + end) / 2);
    // 만약 중간 값이 찾는 값보다 크거나 같다면 중간 인덱스를 마지막 인덱스로 바꾸기
    // ex) start: 1, end: 100, target 40인 경우
    // mid: 50이므로 end를 50으로 바꾸기
    if (arr[mid] >= target) end = mid;
    // 만약 중간 값이 찾는 값보다 작으면 중간 인덱스 + 1을 시작 인덱스로 바꾸기
    // ⭐ 1을 더해주는 이유 : 어차피 찾는 값이 중간 값보다 크기 때문 ⭐
    // ex) start: 1, end: 100, target 80인 경우
    // mid: 50이므로 start를 51으로 바꾸기
    else start = mid + 1;
  }
  return end;
};

// 범위 내의 가장 오른쪽 인덱스 반환 (상세 설명은 상단 lowerBound 함수와 동일)
const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const solution = (cards, targets) => {
  // 1. 일치하는 숫자 카드 개수를 담을 결과 배열 생성
  const counts = [];

  // 2. 먼저 이진 탐색을 위한 오름차순 정렬 수행
  cards.sort((a, b) => a - b);

  // 3. targets 배열을 순회
  targets.forEach((target) =>
    // 3-1. 배열의 각 요소를 토대로 가장 오른쪽 인덱스 - 가장 왼쪽 인덱스 = 요소의 개수이므로 그 값을 결과 배열에 삽입
    counts.push(
      upperBound(cards, target, 0, cards.length) -
        lowerBound(cards, target, 0, cards.length)
    )
  );

  // 4. 결과 배열 반환
  return counts;
};

console.log(
  solution([6, 3, 2, 10, 10, 10, -10, -10, 7, 3], [10, 9, -5, 2, 3, 4, 5, -10])
);
