//실패했습니다. 이유를 모르겠습니다.
function solution(s, n) {
  // for문을 돌릴까 생각했는데 아스키코드가 떠올라 찾아보니 인덱스번호를 이용하면 쉽게 가능할지도 모르겠다 생각했습니다.
  // A-Z를 아스키코드 인덱스 번호로 치환하면 65-90, a-z는 97-122, 공백은 32입니다.
  // 예외사항으로는, z다음의 숫자는 a라고 하는걸 보니 Z도 마찬가지로 A로 간다고 생각해서 예외처리도 작성을 시도했습니다.

  let asciiCode = []; // 아스키코드 담을 배열 선언
  for (let i = 0; i < s.length; i++) {
    asciiCode.push(s.charCodeAt(i)); // 문자열의 i번째 인덱스를 아스키코드로 변환하고 배열에 push
  }
  console.log(asciiCode);

  // [[32,0],[azNum,1],[AZnum,2]] 이런식으로 공백,az,AZ 를 식별할 수 있게 배열형식으로 배열에 넣는다.
  // 식별자를 넣은 이유는 그냥 n을 더해서 배열에 넣고 다시 아스키코드를 문자로 변환하면 다른 문자가 나오기 때문.

  let result = asciiCode
    // .map((num) => (num === 32 ? 32 : num + n)) // 공백32번이면 32, 아니라면 + n
    .map((num) => {
      if (num === 32) {
        // 공백
        return [32, 0];
      } else if (num >= 97 && num <= 122) {
        // az
        return [num, 1];
      } else if (num >= 65 && num <= 90) {
        // AZ
        return [num, 2];
      }
    })
    .map((idtNum) => {
      // 여기 계산식이 이루어지지 않는 이유를 모르겠습니다... 여기만 해결되면 되는데... 리턴문은 괜찮은데 조건문이 문제가 있는거같습니다. 조건에 안걸립니다.
      if (idtNum[1] === 0) {
        return idtNum;
      } else if (idtNum[1] === 1 && idtNum[0] > 122) {
        // 식별자가 1이고(az 관련이고) 122(z) 보다 큰 경우
        return [idtNum[0] - 26 + (n % 26), 1]; // a부터 n만큼 앞의 아스키코드를 리턴
      } else if (idtNum[1] === 2 && idtNum[0] > 90) {
        // 식별자가 2이고(AZ 관련이고) 90(Z) 보다 큰 경우
        return [idtNum[0] - 26 + (n % 26), 2]; // A부터 n만큼 앞의 아스키코드로 리턴
      } else {
        return idtNum;
      }
    })
    .reduce((a, b) => a.concat(b[0]), []) // 2차원배열에서 식별자떼고 1차원 배열로 변환
    .map((convNum) => String.fromCharCode(convNum)); // String.fromCharCode(i)를 이용하여 숫자를 아스키코드 인덱스로 넣어서 알파벳 또는 공백으로 변환
  console.log(result);

  return result;
}

solution('AB', 1);
solution('z', 1);
solution('a B z', 4);

////////////////////////////////////////////////////////////////////////////////

// Gpt 가 여러번 시도해서 성공한 코드
// function solution(s, n) {
//   let asciiCode = [];
//   for (let i = 0; i < s.length; i++) {
//     asciiCode.push(s.charCodeAt(i));
//   }

//   let result = asciiCode.map((num) => {
//     if (num === 32) {
//       return [32, 0];
//     } else if (num >= 97 && num <= 122) {
//       return [((num - 97 + n) % 26) + 97, 1];
//     } else if (num >= 65 && num <= 90) {
//       return [((num - 65 + n) % 26) + 65, 2];
//     }
//   });

//   return result.map((idtNum) => String.fromCharCode(idtNum[0])).join("");
// }

// console.log(solution("AB", 1));
// console.log(solution("z", 1));
// console.log(solution("a B z", 4));
