// [문제 이름]
// : 큰 수 만들기

// [문제 설명]
// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을
// 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

// 숫자로 변환하면 런타임오류가 난다... 문자열로만 풀어야 한다는 힌트를 얻음
function solution(number, k) {
  // 조건에 성립되는 원소를 담을 스택
  const arr = [];
  // number 시작 포인트
  let p = 0;
  // 시작 포인트가 바뀌지 않았는지 체크하는 flag
  let flag = false;
  while (k > 0) {
    // 초기 k와p의 값을 저장
    let originK = k;
    let originP = p;
    // 1. 우선 시작 포인트의 첫 원소를 스택에 추가 [1,9,2,4] => arr = [1]
    arr.push(number[p]);
    // 2. 시작포인트 + 1 부터 제거해야하는 k만큼 반복문 수행 => 인덱스 1~2 까지
    // k만큼 반복문을 수행하는 이유는 k보다 뒤에있는 숫자들을 k만큼 제거가 불가능
    // ex) number = 119, k=1 => 9는 뒤에 1개를 제거해주지 못함
    for (let i = originP + 1; i <= originP + originK; i++) {
      // 3. 만약 스택에 마지막 원소보다 현재 가리키는 값이 더 크면 스택에 원소 교체
      // 0~9의 유니코드 값이 순차적이므로 number 타입으로 바꿔주지 않아도 된다.
      if (arr[arr.length - 1] < number[i]) {
        arr.pop();
        arr.push(number[i]);
        // 시작포인트는 i로 교체
        p = i;
        // 9는 가질 수 있는 최대값으로 연산 효율을 위해 반복문 강제중단
        if (number[i] === '9') break;
      }
    }
    // 만약 현재 어레이 길이가 기존 숫자에서 제거한 만큼의 숫자 길이와 같다면 반복문 중단
    // 이미 다 제거하고 필요한 원소는 어레이에 담김
    if (arr.length === number.length - originK) {
      flag = true;
      break;
    }
    // 아니라면 k는 제거된 만큼 뺴줌 (움직인 p - 시작 p)
    // [1,9,2,4] => p=1, originP = 0 => 1개만큼 제거되었다. => k도 1빼줌
    else {
      flag = false;
      k -= p - originP;
    }
    // 다음 시작점은 현재 가리키는 원소의 다음 원소
    p++;
  }
  // 이미 다 제거하고 필요한 원소만 어레이만 있을경우 어레이만 리턴, 그외의 경우 어레이와 p를 기준으로 리턴
  // [1,9,2,4,5], k=2 => arr=[9,4], p=4 => 945
  return flag ? arr.join('') : arr.join('') + number.slice(p);
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
console.log(solution('222', 2));
console.log(solution('4321', 1));

// 숫자로 변환해서 풀은 코드 (테스트케이스 10번 런타임 에러)
/* function solution(number, k) {
  var answer = '';
  // 문자열 숫자를 배열 형태로 바꾼다. "1924" -> [1,9,2,4]
  let numberArr = number.split('').map(Number);
  let maxIndex = 0;
  let originK = k;
  let flag = false;
  // 제거할 숫자가 1개라도 있으면 반복문 수행
  while (k > 0) {
    // 1. 0 부터 k 번째까지에서 최대값 찾는다.
    max = Math.max(...numberArr.slice(0, k + 1));
    maxIndex = numberArr.findIndex((ele) => ele === max);
    // 2. 찾은 최대값 정답에 추가
    answer += numberArr[maxIndex];
    // 3. 정답길이가 기존 숫자에서 k만큼 뺀것과 같으면 반복문 탈출
    if (answer.length === number.length - originK) {
      flag = true;
      break;
    }
    // 4. 아니라면 k는 최대값 이전의 값을 다 제거했으므로 index만큼 뺴줌
    k = k - maxIndex;
    // 5. 남은 숫자배열을 최신화 [1,9,2,4] => [2,4] (1은 제거되었고 9는 정답으로 추가됨)
    numberArr = numberArr.slice(maxIndex + 1);
  }
  // 정답길이가 기존숫자에서 k만큼 같아서 빠져나왔다면 그대로 리턴, 아니라면 남아있는 숫자들을 합쳐서 리턴
  // [1,9,2,4] => 94,[] (그대로 리턴)
  // [4,1,7,7,2,5,2,8,4,1] => 7758, [4,1] (남아있는거랑 합쳐서 리턴) => 775841
  return flag ? answer : answer + numberArr.join('');
} */
