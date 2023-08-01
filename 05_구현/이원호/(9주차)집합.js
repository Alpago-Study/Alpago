// [문제 이름]
// : 집합

// [문제 설명]
// : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
//  add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
//  remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
//  check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
//  toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
//  all: S를 {1, 2, ..., 20} 으로 바꾼다.
//  empty: S를 공집합으로 바꾼다.

// [문제 링크]
// : https://www.acmicpc.net/problem/11723

class Solution {
  constructor() {
    this.S = new Set();
  }

  add(x) {
    if (x >= 1 && x <= 20) {
      this.S.add(x);
    }
  }

  remove(x) {
    if (this.S.has(x)) {
      this.S.delete(x);
    }
  }

  check(x) {
    return this.S.has(x) ? 1 : 0;
  }

  toggle(x) {
    if (this.S.has(x)) {
      this.S.delete(x);
    } else {
      this.S.add(x);
    }
  }

  all() {
    for (let i = 1; i <= 20; i++) {
      this.S.add(i);
    }
  }

  empty() {
    this.S.clear();
  }
}

const solution = new Solution();
solution.add(1);
solution.add(2);
console.log(solution.check(1)); // 결과: 1
console.log(solution.check(2)); // 결과: 1
console.log(solution.check(3)); // 결과: 0
solution.remove(2);
console.log(solution.check(1)); // 결과: 1
console.log(solution.check(2)); // 결과: 0
solution.toggle(3);
console.log(solution.check(1)); // 결과: 1
console.log(solution.check(2)); // 결과: 0
console.log(solution.check(3)); // 결과: 1
console.log(solution.check(4)); // 결과: 0
solution.all();
console.log(solution.check(10)); // 결과: 1
console.log(solution.check(20)); // 결과: 1
solution.toggle(10);
solution.remove(20);
console.log(solution.check(10)); // 결과: 0
console.log(solution.check(20)); // 결과: 0
solution.empty();
console.log(solution.check(1)); // 결과: 0
solution.toggle(1);
console.log(solution.check(1)); // 결과: 1
solution.toggle(1);
console.log(solution.check(1)); // 결과: 0
