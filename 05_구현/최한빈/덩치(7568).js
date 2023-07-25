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

// 뻘짓한 코드
// 백준 문제풀이용 코드
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = +input.shift();

// 덩치 순 정렬된 queue
const queue = [];
// 순위를 담을 배열
let rank = [];
let rest = [];
let rankRest = [];
let count = 0;
for (let i = 0; i < n; i++) {
  const [w, h] = input[i].split(' ').map(Number);

  // 초기 큐가 비워있는 상태에는 첫번째 값 그대로 푸쉬, 랭크도 1로 셋팅
  if (i === 0) {
    rank.push(1);
    queue.push([w, h]);
    count = 1;
  } else
    while (true) {
      // 제일 커서 가장 맨 앞에 추가되는 경우
      if (queue.length === 0) {
        // 푸쉬하고 나머지 원소들 푸쉬
        queue.push([w, h]);
        queue.push(...rest);
        // 랭크는 1푸쉬하고 나머지 랭크들+1 해서 푸쉬
        rank.push(1);
        rank.push(...rankRest.map((ele) => ele + 1));
        rest = [];
        rankRest = [];
        break;
      }
      // 앞사람보다 키, 몸무게 둘다 작으면 그냥 뒤에 배치
      if (queue[queue.length - 1][0] > w && queue[queue.length - 1][1] > h) {
        // 현재 원소를 맨 뒤에 추가
        queue.push([w, h]);
        // 나머지 배열들도 그 뒤에 추가
        queue.push(...rest);
        // 랭크는 현재 쌓인 count만큼 더해줌
        rank.push(rank[rank.length - 1] + count);
        // 나머지 뒤에 오는 원소도 count 만큼 더해줌
        rank.push(...rankRest.map((ele) => ele + count));
        // 다시 count 1로 셋팅
        count = 1;
        rest = [];
        rankRest = [];
        break;
        // 앞 사람보다 키 혹은 몸무게만 커서 둘이 같은 등수일 경우
      } else if (
        queue[queue.length - 1][0] > w &&
        queue[queue.length - 1][1] < h
      ) {
        queue.push([w, h]);
        queue.push(...rest);
        // 랭크는 앞에 있는 원소와 동일
        rank.push(rank[rank.length - 1]);
        // 나머지는 쌓인만큼 더해줌
        rank.push(...rankRest.map((ele) => ele + count));
        rest = [];
        rankRest = [];
        // count는 1만큼 쌓임
        count++;
        break;
      } else if (
        queue[queue.length - 1][0] < w &&
        queue[queue.length - 1][1] > h
      ) {
        queue.push([w, h]);
        queue.push(...rest);
        rank.push(rank[rank.length - 1]);
        rank.push(...rankRest.map((ele) => ele + count));
        rest = [];
        rankRest = [];
        count++;
        break;
      }
      // 앞사람보다 더 커서 앞으로 들어가야 하는 경우
      else {
        // 맨 뒤에 원소를 빼서 나머지 배열에 추가
        rest.push(queue.pop());
        // 랭크도 마찬가지
        rankRest.push(rank.pop());
      }
    }
}
let answer = '';
for (let i = 0; i < n; i++) {
  const [w, h] = input[i].split(' ').map(Number);
  const idx = queue.findIndex((ele) => ele[0] === w && ele[1] === h);
  answer += rank[idx] + ' ';
}
console.log(answer);

// 레퍼런스 참고한 코드
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
