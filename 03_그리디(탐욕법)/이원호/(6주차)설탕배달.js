// [문제 이름]
// : 설탕 배달

// [문제 설명]
// : 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
//  상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
//  상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

// [문제 링크]
// : https://www.acmicpc.net/problem/2839

function solution(n) {
  // 배달하는 봉지 개수를 담을 변수를 선언
  let count = 0;

  while (n > 0) {
    // 한번에 5로 나눠지면 나눈값을 count로 리턴
    // 그 외에는 3키로씩 빼나가면서 5로 나눠지는지를 확인
    if (n % 5 === 0) {
      count = count + n / 5;
      n = 0;
      break;
    } else {
      count++;
      n = n - 3;
      if (n % 5 === 0) {
        count = count + n / 5;
        n = 0;
      }
    }
  }
  return n === 0 ? count : -1;
}

console.log(solution(18));
console.log(solution(4));
console.log(solution(6));
console.log(solution(9));
console.log(solution(11));
console.log(solution(5));
