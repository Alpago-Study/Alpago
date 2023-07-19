// [문제 이름]
// : 집합

// [문제 설명]
// : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
//   add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
//   remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
//   check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
//   toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
//   all: S를 {1, 2, ..., 20} 으로 바꾼다.
//   empty: S를 공집합으로 바꾼다.

// [문제 링크]
// : https://www.acmicpc.net/problem/11723

// m = "add 1" 이라면 m.spilt(" ") => ['add', '1']
// let operator = m[0]
// let num = Number(m[1])

let arr = new Array(20).fill(0);

const set = (m) => {
  let a = m.split(' ');
  let operator = a[0];
  let num = Number(a[1]);

  switch (operator) {
    case 'add':
      if (arr[num - 1] !== num) arr[num - 1] = num;
      break;

    case 'remove':
      if (arr[num - 1] !== 0) arr[num - 1] = 0;
      break;

    case 'check':
      if (arr[num - 1] === num) {
        return 1;
      } else {
        return 0;
      }

    case 'toggle':
      let idx = arr.findIndex((cur) => cur === num);
      if (idx === -1) {
        arr[num - 1] = num;
      } else {
        arr[num - 1] = 0;
      }
      break;

    case 'all':
      for (let i = 0; i < 20; i++) {
        arr[i] = i + 1;
      }

      break;

    case 'empty':
      arr = [];
      break;

    default:
      break;
  }
};

console.log(set('add 1'));
console.log(set('add 2'));

console.log(set('check 1')); // 1
console.log(set('check 2')); // 1
console.log(set('check 3')); // 0

console.log(set('remove 2'));

console.log(set('check 1')); // 1
console.log(set('check 2')); // 0

console.log(set('toggle 3'));

console.log(set('check 1')); // 1
console.log(set('check 2')); // 0
console.log(set('check 3')); // 1
console.log(set('check 4')); // 0

console.log(set('all'));

console.log(set('check 10')); // 1
console.log(set('check 20')); // 1

console.log(set('toggle 10'));
console.log(set('remove 20'));

console.log(set('check 10')); // 0
console.log(set('check 20')); // 0

console.log(set('empty'));

console.log(set('check 1')); // 0

console.log(set('toggle 1'));

console.log(set('check 1')); // 1

console.log(set('toggle 1'));

console.log(set('check 1')); // 0
