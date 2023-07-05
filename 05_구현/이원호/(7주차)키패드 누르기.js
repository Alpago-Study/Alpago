// [문제 이름]
// : [카카오 인턴] 키패드 누르기

// [문제 설명]
// : 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
//  맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.
//  엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
//  왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
//  오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
//  가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
//  4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
//  순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = '';
  //초기 왼쪽 손가락 위치 (3,0)
  let Li = 3;
  let Lj = 0;
  //초기 오른쪽 손가락 위치 (3,2)
  let Ri = 3;
  let Rj = 2;

  //키패드 위치 정보 * #은 10 12로 임의로 대체
  let list = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 0, 12],
  ];

  //입력 numbers만큼 반복
  for (let k = 0; k < numbers.length; k++) {
    //키패드 2차원 길이만큼 반복
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        //입력값과 키패드 위치값이 일치할때
        if (numbers[k] === list[i][j]) {
          //이차원 배열 j값이 0이라면 왼쪽 손가락으로만 사용
          if (j === 0) {
            Li = i;
            Lj = j;
            answer += 'L';
            //이차원 배열 j값이 2이라면 오른쪽 손가락으로만 사용
          } else if (j === 2) {
            Ri = i;
            Rj = j;
            answer += 'R';
          }
          //가운데 2,5,8,0일 경우
          else {
            //점과 점사이 구하는 공식 이용

            //왼쪽 손가락 위치와 현재 i,j의 떨어진 거리 계산(절대값 이용)
            let tmpL = Math.abs(i - Li) + Math.abs(j - Lj);
            //오른쪽 손가락 위치와 현자 i,j의 떨어진 거리 계산(절대값 이용)
            let tmpR = Math.abs(i - Ri) + Math.abs(j - Rj);

            //떨어진 거리가 더 가까운 경우를 판별해서
            //해당 손가락으로 사용
            if (tmpL > tmpR) {
              Ri = i;
              Rj = j;
              answer += 'R';
            } else if (tmpL < tmpR) {
              Li = i;
              Lj = j;
              answer += 'L';
              //떨어진 거리가 왼쪽 오른쪽 같은 경우
            } else if (tmpL === tmpR) {
              //왼손잡이라면 왼쪽 이용
              if (hand === 'left') {
                Li = i;
                Lj = j;
                answer += 'L';
                //오른손잡이일 경우
              } else {
                Ri = i;
                Rj = j;
                answer += 'R';
              }
            }
          }
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
