// 실패, 16이 나와야하는데 12가 나옵니다.
function solution(land) {
  // 마지막 행까지 내려왔을 때, 얻을 수 있는 점수의 최대값을 구하는 문제
  // 한 행씩 내려오면서 같은 열을 연속해서 밟을 수 없는 규칙이 존재
  // 첫번째 두번째 세번째 행 내림차순 sort
  // 첫번째 행을 for문을 돌면서 같은수를 찾고, 그 수의 인덱스값을 또다른 변수에 저장
  // 가장 큰 수의 인덱스가 다음행의 가장큰수의 인덱스랑 같다면 두번째로 큰 값을 넣기

  const n = land.length;

  const sorted1 = land[0].sort((a, b) => b - a); // 첫번째 행 내림차순
  const sorted2 = land[1].sort((a, b) => b - a); // 두번째 행 내림차순
  const sorted3 = land[2].sort((a, b) => b - a); // 세번째 행 내림차순

  let sorted1_index0 = 0; // 첫번째 행 중 가장 큰 수의 인덱스
  let sorted2_index0 = 0; // 두번째 행 중 가장 큰 수의 인덱스
  let sorted3_index0 = 0; // 세번째 행 중 가장 큰 수의 인덱스

  let num1 = sorted1[0]; // 첫번째 행 중 가장 큰 수 저장
  let num2 = sorted2[0]; // 두번째 행 중 가장 큰 수 저장
  let num3 = sorted3[0]; // 세번재 행 중 가장 큰 수 저장

  // 각 행의 가장 큰 수의 인덱스를 찾는 for문
  for (let i = 0; i < n; i++) {
    if (sorted1[0] === land[0][i]) {
      sorted1_index0 += land[0].indexOf(num1);
    }
    if (sorted2[0] === land[1][i]) {
      sorted2_index0 += land[1].indexOf(num2);
    }
    if (sorted3[0] === land[1][i]) {
      sorted3_index0 += land[1].indexOf(num3);
    }
  }

  // 가장 큰 수의 인덱스가 다음행의 가장큰수의 인덱스랑 같다면
  if (sorted1_index0 === sorted2_index0) {
    num2 = sorted2[1];
    sorted2_index0 = land[1].indexOf(sorted2[1]);
  }
  if (sorted2_index0 === sorted3_index0) {
    num3 = sorted3[1];
  }

  let result = num1 + num2 + num3;

  return result;
}
