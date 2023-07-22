// [문제 이름]
// : 덩치

// [문제 설명]
// : 우리는 사람의 덩치를 키와 몸무게, 이 두 개의 값으로 표현하여 그 등수를 매겨보려고 한다. 어떤 사람의 몸무게가 x kg이고 키가 y cm라면 이 사람의 덩치는 (x, y)로 표시된다. 두 사람 A 와 B의 덩치가 각각 (x, y), (p, q)라고 할 때 x > p 그리고 y > q 이라면 우리는 A의 덩치가 B의 덩치보다 "더 크다"고 말한다. 예를 들어 어떤 A, B 두 사람의 덩치가 각각 (56, 177), (45, 165) 라고 한다면 A의 덩치가 B보다 큰 셈이 된다. 그런데 서로 다른 덩치끼리 크기를 정할 수 없는 경우도 있다. 예를 들어 두 사람 C와 D의 덩치가 각각 (45, 181), (55, 173)이라면 몸무게는 D가 C보다 더 무겁고, 키는 C가 더 크므로, "덩치"로만 볼 때 C와 D는 누구도 상대방보다 더 크다고 말할 수 없다.

// N명의 집단에서 각 사람의 덩치 등수는 자신보다 더 "큰 덩치"의 사람의 수로 정해진다. 만일 자신보다 더 큰 덩치의 사람이 k명이라면 그 사람의 덩치 등수는 k+1이 된다. 이렇게 등수를 결정하면 같은 덩치 등수를 가진 사람은 여러 명도 가능하다. 아래는 5명으로 이루어진 집단에서 각 사람의 덩치와 그 등수가 표시된 표이다.

// 이름	(몸무게, 키)	덩치 등수
// A	(55, 185)	2
// B	(58, 183)	2
// C	(88, 186)	1
// D	(60, 175)	2
// E	(46, 155)	5
// 위 표에서 C보다 더 큰 덩치의 사람이 없으므로 C는 1등이 된다. 그리고 A, B, D 각각의 덩치보다 큰 사람은 C뿐이므로 이들은 모두 2등이 된다. 그리고 E보다 큰 덩치는 A, B, C, D 이렇게 4명이므로 E의 덩치는 5등이 된다. 위 경우에 3등과 4등은 존재하지 않는다. 여러분은 학생 N명의 몸무게와 키가 담긴 입력을 읽어서 각 사람의 덩치 등수를 계산하여 출력해야 한다.

// [문제 링크]
// : https://www.acmicpc.net/problem/7568

// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}
const newArr = [];
arr.forEach((ele) => {
  // 무게와 키가 둘다 큰 사람이 있는지 확인.
  // 아무도 없다면 1등, 있다면 (사람들 수 + 1)등
  const bigger = arr.filter((e) => e[0] > ele[0] && e[1] > ele[1]).length;
  newArr.push(bigger + 1);
});
console.log(newArr.join(' '));

// 뻘짓한 코드
// // 무게와 키가 큰 사람이 있는 명수로 sort
// newArr.sort((a, b) => a[1] - b[1]);
// let num = 1;
// let k = 1;
// const rank = [];
// // 등수배열을 만든다.
// for (let i = 0; i < newArr.length; i++) {
//   // 배열이 비어잇으면 첫번째 사람은 1등
//   if (i === 0) rank.push([...newArr[i], num]);
//   else {
//     // 배열이 있다면 이전에 사람과 비교
//     const prev = rank[rank.length - 1][1];
//     // 명수가 같으면 같은 등수
//     if (prev === newArr[i][1]) {
//       rank.push([...newArr[i], num]);
//       // 다음 등수는 앞에 사람만큼 + 해줘야 하므로 k를 증가
//       k++;
//     } else {
//       // 등수를 앞에 사람만큼 더해준다
//       num += k;
//       rank.push([...newArr[i], num]);
//       // 다시 앞에 사람은 1로 초기화
//       k = 1;
//     }
//   }
// }
// console.log(
//   rank
//     .sort((a, b) => a[0] - b[0])
//     .map((ele) => ele[2])
//     .join(" ")
// );
