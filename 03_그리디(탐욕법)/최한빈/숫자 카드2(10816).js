// [문제 이름]
// : 숫자 카드2

// [문제 설명]
// 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/1920

// 백준 문제풀이용 코드
let fs = require('fs');
let input = fs.readFileSync('./ex.txt').toString().split('\n');

let n = input[1].split(' ').map(Number);
let m = input[3].split(' ').map(Number);

// 카드를 정렬한다.
n.sort((a, b) => a - b);

// 정렬된 카드 중 target이 카드에 여러개 있을 때 가장 왼쪽 인덱스 찾는 함수
const lowerBound = (arr, target, start, end) => {
  // 시작점과 끝점으로 mid 찾기
  const mid = parseInt((start + end) / 2);

  // 시작점이 끝점을 넘어가면 종료 (원하는 값을 찾지 못했다)
  if (start > end) return 0;

  // target을 찾으면 앞에 인덱스로도 비교해본다.
  if (arr[mid] === target)
    // 앞에 인덱스도 target을 가지면 앞에 인덱스까지 슬라이싱해서 재귀로 다시 이진 탐색 수행, 아니면 그대로 리턴
    return arr[mid - 1] === target
      ? lowerBound(arr, target, start, mid - 1)
      : mid;

  // 이진탐색 부분
  if (arr[mid] > target) {
    end = mid - 1;
  }
  if (arr[mid] < target) {
    start = mid + 1;
  }
  return lowerBound(arr, target, start, end);
};

// 정렬된 카드 중 target이 카드에 여러개 있을 때 가장 오른쪽 인덱스+1 찾는 함수
const upperBound = (arr, target, start, end) => {
  // 시작점과 끝점으로 mid 찾기
  const mid = parseInt((start + end) / 2);

  // 시작점이 끝점을 넘어가면 함수종료
  if (start > end) return 0;

  // target을 찾으면 이번에는 앞에 인덱스도 확인해본다.
  if (arr[mid] === target)
    // 앞에 인덱스가 타겟을 가리키면 앞에 인덱스로 슬라이싱해서 재귀로 이진 탐색 수행, 아니면 mid 리턴
    // 리턴할때 +1 하는 이유는 개수를 찾는 문제이므로 target을 찾은 다음 인덱스를 가리키게 해준다.
    return arr[mid + 1] === target
      ? upperBound(arr, target, mid + 1, end)
      : mid + 1;

  // 이진 탐색 수행 코드
  if (arr[mid] > target) {
    end = mid - 1;
  } else if (arr[mid] < target) {
    start = mid + 1;
  }
  return upperBound(arr, target, start, end);
};

let answer = '';
for (let i = 0; i < m.length; i++) {
  // (가장 오른쪽 인덱스+1) - (가장 왼쪽 인덱스) = 타겟의 개수
  answer +=
    upperBound(n, m[i], 0, n.length - 1) -
    lowerBound(n, m[i], 0, n.length - 1) +
    ' ';
}
console.log(answer);
