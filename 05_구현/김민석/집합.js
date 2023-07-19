// [문제 이름]
// : 집합

// [문제 설명]
// : 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.

// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다.

// [문제 링크]
// : https://www.acmicpc.net/problem/11723

// ⭐ 클래스로 구현 ⭐
class CustomSet {
  constructor() {
    this.set = []; // 초기 집합
  }

  add(x) {
    // 만약 집합에 요소가 있다면 무시
    if (this.set.includes(x)) return;

    // 집합에 요소 추가
    this.set.push(x);
  }

  remove(x) {
    // 만약 집합에 요소가 없다면 무시
    if (!this.set.includes(x)) return;

    // 집합에서 요소 제거
    this.set = this.set.filter((element) => element !== x);
  }

  check(x) {
    // 집합에 요소가 존재하는지 여부를 출력
    console.log(this.set.includes(x) ? 1 : 0);
  }

  toggle(x) {
    // 집합에 요소가 존재하면 제거, 존재하지 않으면 추가
    this.set.includes(x) ? this.remove(x) : this.add(x);
  }

  all() {
    // 1 ~ 20까지 요소로 가지는 집합으로 초기화
    this.set = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  }

  empty() {
    // 비어있는 집합으로 초기화
    this.set = [];
  }
}

const newSet = new CustomSet();

newSet.add(1);
newSet.add(2);
newSet.check(1);
newSet.check(2);
newSet.check(3);
newSet.remove(2);
newSet.check(1);
newSet.check(2);
newSet.toggle(3);
newSet.check(1);
newSet.check(2);
newSet.check(3);
newSet.check(4);
newSet.all();
newSet.check(10);
newSet.check(20);
newSet.toggle(10);
newSet.remove(20);
newSet.check(10);
newSet.check(20);
newSet.empty();
newSet.check(1);
newSet.toggle(1);
newSet.check(1);
newSet.toggle(1);
newSet.check(1);
