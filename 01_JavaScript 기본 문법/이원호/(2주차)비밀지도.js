// [문제 이름]
// : 비밀지도

// [문제 설명]
// : 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  // 일단 배열 내 요소들을 2진법으로 바꿔보자
  let arr1B = [];
  let arr2B = [];

  // 결과 [1001, 10100,11100, 10010,1011]
  for (let i = 0; i < arr1.length; i++) {
    arr1B[i] = arr1[i].toString(2);
    arr2B[i] = arr2[i].toString(2);
  }

  // n자리로 맞춰줘야함 ex) n 5일경우 1  = > 00001

  for (let i = 0; i < n; i++) {
    // i번째 인덱스요소가 n과 크기가 다를경우
    // 그 차이만큼 앞에 0을 붙혀줌
    if (arr1B[i].length !== n) {
      arr1B[i] = '0'.repeat(n - arr1B[i].length) + arr1B[i];
    }
    if (arr2B[i].length !== n) {
      arr2B[i] = '0'.repeat(n - arr2B[i].length) + arr2B[i];
    }
  }

  // 결과를 담을 변수 배열 선언
  let result = [];

  // 배열의 i번째 요소간 비교하면서 1이 한개라도 있으면 #로 변환 아닐경우 공백으로 반환
  for (let i = 0; i < n; i++) {
    // 결과의 i번째 인덱스를 문자열로 선언
    result[i] = '';
    for (let j = 0; j < n; j++) {
      if (arr1B[i][j] === '1' || arr2B[i][j] === '1') {
        result[i] += '#';
      } else {
        result[i] += ' ';
      }
    }
  }

  return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
