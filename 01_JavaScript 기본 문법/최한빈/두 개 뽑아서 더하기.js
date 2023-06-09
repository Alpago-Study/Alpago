// [문제 이름]
// : 두 개 뽑아서 더하기

// [문제 설명]
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

const getCombinations = (arr, num) => {
  // 1. base case -> num === 1 이면 각 원소를 배열로 감싸 리턴
  // 2. recursive case -> 고정된 원소를 제외하고 잘라 나머지 배열을 재귀
  // 3. 고정된 원소와 나머지 배열을 concat
  const results = [];

  // base case
  // num == 1 이면 각 원소를 배열로 감싸 리턴
  if (num === 1) return arr.map((ele) => [ele]);

  // ex getCombinations([1,2,3,4,5] ,2)
  arr.forEach((element, idx) => {
    // 현재 원소를 기준으로 나머지 배열 자름
    const leftArr = arr.slice(idx + 1); // [2,3,4,5]

    // 콤비네이션 함수 재귀로 실행
    const combination = getCombinations(leftArr, num - 1);
    // getCombinations([2,3,4,5], 1)
    // => [[2],[3],[4],[5]]
    // element는 1로 고정되고 재귀를 통해 [[2],[3],[4],[5]] 값이 combination으로 할당

    // console.log(element, combination);

    // 콤비네이션의 원소와 현재 element를 묶어서 result 변수에 할당
    combination.forEach((ele) => results.push([element, ...ele]));
    // 첫번째 원소를 기준으로 조합이 생성됨 -> [[1,2],[1,3],[1,4],[1,5]]
    // 나머지 원소들도 조합을 생성해서 result에 push
  });
  return results;
};

function solution(numbers) {
  // 두개 뽑아서 더하기 -> "뽑아서" -> 조합 (C)

  // 조합을 저장하는 변수
  const combination = getCombinations(numbers, 2);

  // 저장된 조합을 통해 각 원소들을 더해줌
  const sumArr = combination.map((ele) => ele[0] + ele[1]);

  // 정답 형태로 변환
  // 배열 sorting -> set을 통해 중복 제거 -> 다시 set을 배열로 변환
  return Array.from(new Set(sumArr.sort((a, b) => a - b)));
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

// console.log(getCombinations([1, 2, 3, 4], 3));
