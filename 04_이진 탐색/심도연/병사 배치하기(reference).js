// [문제 이름]
// : 병사 배치하기

// [문제 설명]
// : N명의 병사가 무작위로 나열되어 있다. 각 병사는 특정한 값의 전투력을 보유하고 있으며, 병사를 배치할 때는 전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치를 하고자 한다. 다시 말해 앞쪽에 있는 병사의 전투력이 항상 뒤쪽에 있는 병사보다 높아야 한다.
//   또한 배치 과정에서는 특정한 위치에 있는 병사를 열외시키는 방법을 이용한다. 그러면서도 남아있는 병사의 수가 최대가 되도록 하고 싶다.
//   병사에 대한 정보가 주어졌을 때, 남아있는 병사의 수가 최대가 되도록 하기 위해서 열외해야 하는 병사의 수를 출력하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/18353

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const soldier_deployment = (n, arr) => {
  arr.reverse();

  let d = [0];

  for (x of arr) {
    if (d[d.length - 1] < x) {
      d.push(x);
    } else {
      let index = lowerBound(d, x, 0, d.length);
      d[index] = x;
    }
  }

  console.log(n - (d.length - 1));
};

soldier_deployment(7, [15, 11, 4, 8, 5, 2, 4]);
soldier_deployment(5, [15, 11, 5, 2, 3]);
