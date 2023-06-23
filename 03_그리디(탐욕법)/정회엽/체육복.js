//문제이름 : 체육복

/*문제설명 : 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 
매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요. */

//문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42862

// function solution(n, lost, reserve) {
//   let OK = []; //수업 가능한 인원 배열
//   let reserved = []; //빌려줄수 없는 인원
//   lost = lost.sort((a, b) => a - b);
//   reserve = reserve.sort((a, b) => a - b);
//   for (let i = 1; i <= n; i++) {
//     if (reserve.includes(i)) {
//       OK.push(i);
//       if (lost.includes(i)) {
//         reserve.push(i);
//         continue;
//       }
//       if (reserved.includes(i)) {
//         continue;
//       }
//       if (i <= n - 2 && lost.includes(i + 1) && lost.includes(i + 2)) {
//         OK.push(i + 1);
//         reserved.push(i, i + 1);
//       } else if (i === n - 1 && lost.includes(i + 1)) {
//         OK.push(i, i + 1);
//         break;
//       }
//     } else if (lost.includes(i)) {
//       if (reserved.includes(i)) continue;
//       if (i < n) {
//         if (reserve.includes(i + 1) && !lost.includes(i + 1)) {
//           OK.push(i);
//           reserved.push(i, i + 1);
//         }
//       } else if (i === n) {
//         break;
//       }
//     } else {
//       reserved.push(i);
//       OK.push(i);
//     }
//   }
//   return OK.length;
// }

function solution(n, lost, reserve) {
  //빌려줄수 있는애들중 도난 안당한 애들 찾기. => 진짜 빌려줄수있는애들
  let realReserve = reserve.filter((el) => {
    return !lost.includes(el);
  });
  //도난당한 애들중 진짜 빌려야 하는애들 찾기.
  let realLost = lost.filter((el) => !reserve.includes(el));
  //인덱스 번호 비교해서 빌릴수 있는지 확인.
  realLost = realLost.sort((a, b) => a - b);
  realReserve = realReserve.sort((a, b) => a - b);

  //빌려주는 애 인덱스번호가 빌려야하는애 인덱스 번호 +- 1
  for (let i = 0; i < realReserve.length; i++) {}
  let answer = n - realLost.length;
  //총 수업 가능한 애들 리턴.
  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
