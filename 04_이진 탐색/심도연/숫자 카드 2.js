// [문제 이름]
// : 숫자 카드 2

// [문제 설명]
// : 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/10816

// 객체를 이용하여 문제를 해결해보자...
// n 개의 카드들을 모두 obj에 key, value 형태로 저장하고 해당 key 값이 존재한다면 value를 1씩 올려주고, 해당 key 값이 존재하지 않는다면 value를 1로 만들어주자
// m 개의 카드들을 모두 순회하여 만든 obj에 key 값이 존재하는지 여부를 판별하고 있다면 value 값을 가져오게 했다

const findNumber = (n, m) => {
  // 이진 탐색... lowerBound & upperBound 를 사용해서 풀기가... 어려웠습니다...
  // 제가 한심하다고 생각을 한게... 도전을 해보려고 발가락 하나를 담궜지만 결국 모두 담궈보기는 두렵고 귀찮아서... 안한게 크다...

  // key에는 카드번호를 value는 카드번호의 개수를 넣는다
  let obj = {};
  // obj에 key가 있으면 result 에 넣고 없으면 0을 넣는다
  let result = [];

  // 객체에 상근이가 가진 n개의 카드번호와 카드번호 개수를 추가해준다
  for (let i = 0; i < n.length; i++) {
    // 카드번호가 있으면 개수를 추가해주고, 없다면 개수를 1로 생성해준다
    obj[n[i]] ? obj[n[i]]++ : (obj[n[i]] = 1);
  }

  // console.log(obj);

  // 객체에 m의 카드번호가 있다면 result에 추가한다
  for (let i = 0; i < m.length; i++) {
    // 만약 m의 카드번호가 없다면 result에 0을 추가한다
    obj[m[i]] ? result.push(obj[m[i]]) : result.push(0);
  }

  console.log(result.join(' '));
};

let n = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3];
let m = [10, 9, -5, 2, 3, 4, 5, -10];

console.log(findNumber(n, m));

// 정렬된 배열에서 특정 원소의 개수 구하기
// lowerBound(arr, x) : 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 (작은)왼쪽 index 반환 - 하한선
// upperBound(arr, x) : 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 오른쪽 index 반환 - 상한선

// lowerBound 와 upperBound 중간에 위치한 요소의 개수를 구할 때는 upperBound - lowerBound
