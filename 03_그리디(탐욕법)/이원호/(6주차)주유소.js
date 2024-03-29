// [문제 이름]
// : 주유소

// [문제 설명]
// : 어떤 나라에 N개의 도시가 있다. 이 도시들은 일직선 도로 위에 있다. 편의상 일직선을 수평 방향으로 두자. 제일 왼쪽의 도시에서 제일 오른쪽의 도시로 자동차를 이용하여 이동하려고 한다. 인접한 두 도시 사이의 도로들은 서로 길이가 다를 수 있다. 도로 길이의 단위는 km를 사용한다.
//  처음 출발할 때 자동차에는 기름이 없어서 주유소에서 기름을 넣고 출발하여야 한다. 기름통의 크기는 무제한이어서 얼마든지 많은 기름을 넣을 수 있다. 도로를 이용하여 이동할 때 1km마다 1리터의 기름을 사용한다. 각 도시에는 단 하나의 주유소가 있으며, 도시 마다 주유소의 리터당 가격은 다를 수 있다. 가격의 단위는 원을 사용한다.
// 예를 들어, 이 나라에 다음 그림처럼 4개의 도시가 있다고 하자. 원 안에 있는 숫자는 그 도시에 있는 주유소의 리터당 가격이다. 도로 위에 있는 숫자는 도로의 길이를 표시한 것이다.
//  제일 왼쪽 도시에서 6리터의 기름을 넣고, 더 이상의 주유 없이 제일 오른쪽 도시까지 이동하면 총 비용은 30원이다. 만약 제일 왼쪽 도시에서 2리터의 기름을 넣고(2×5 = 10원) 다음 번 도시까지 이동한 후 3리터의 기름을 넣고(3×2 = 6원) 다음 도시에서 1리터의 기름을 넣어(1×4 = 4원) 제일 오른쪽 도시로 이동하면, 총 비용은 20원이다. 또 다른 방법으로 제일 왼쪽 도시에서 2리터의 기름을 넣고(2×5 = 10원) 다음 번 도시까지 이동한 후 4리터의 기름을 넣고(4×2 = 8원) 제일 오른쪽 도시까지 이동하면, 총 비용은 18원이다.
//  각 도시에 있는 주유소의 기름 가격과, 각 도시를 연결하는 도로의 길이를 입력으로 받아 제일 왼쪽 도시에서 제일 오른쪽 도시로 이동하는 최소의 비용을 계산하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/13305

function solution(load, price) {
  // console.log(solution([2, 5, 3, 3, 2], [5, 2, 2, 3, 1, 1])) 기준 설명
  // 마지막 도시의 기름값은 의미가 없음
  // [5, 2, 2, 3, 1, 1] => [5, 2, 2, 3, 1]
  // 여기서 기름 최저값을 위해서는 [2, 5, 3, 3, 2]도로에 [ 5, 2, 2, 1, 1 ] 금액을 적용하면 됨
  let price2 = price.slice(0, -1);

  // 첫번째 값은 고정(무조건 처음엔 기름을 넣어야하기때문) => 인덱스 1부터 시작
  // 앞에값과 뒤에값을 비교해 가면서
  // 앞에값이 크면 앞에 값을 뒤에 값으로, 뒤에 갚이 크면 뒤에값을 앞에값으로 바꿔나감
  for (let i = 1; i < price2.length - 1; i++) {
    if (price2[i] < price2[i + 1]) {
      price2[i + 1] = price2[i];
    } else {
      price2[i] = price2[i + 1];
    }
  }

  // 배열의 길이가 price2.length인 배열 생성
  let result = new Array(price2.length);
  // 결과 배열에 기름값 * 도로길이를 구한 값 넣기
  for (let i = 0; i < result.length; i++) {
    result[i] = price2[i] * load[i];
  }
  // 배열안에 요소 모두 더하기
  return result.reduce((acc, cur) => acc + cur);
}

console.log(solution([2, 3, 1], [5, 2, 4, 1]));
console.log(solution([3, 3, 4], [1, 1, 1, 1]));
console.log(solution([2, 5, 3, 3, 2], [5, 2, 2, 3, 1, 1]));
console.log(solution([1, 2, 3, 4, 5], [5, 4, 2, 3, 1, 5]));
