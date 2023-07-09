// [문제 이름]
// : 교육과정 설계

// [문제 설명]
// : 링크로 대체

// [문제 링크]
// : https://file.notion.so/f/s/82f2d441-40a2-4834-acf4-ef360fb2c4fa/Untitled.png?id=00ac7160-81bd-411f-a5b4-ea33d527c16b&table=block&spaceId=5893e798-2384-4f46-9548-637dc7a31a9f&expirationTimestamp=1688061600000&signature=ZQp8_u8cSYt3p1RiWyW5o2WL25_93vi_FLsjJPstf6s&downloadName=Untitled.png

function solution(order, plan) {
  let stack = [];
  for (let i = 0; i < plan.length; i++) {
    if (order.includes(plan[i])) {
      stack.push(plan[i]);
    }
  }
  let result = stack.join('');

  if (result == order) {
    return true;
  } else {
    return false;
  }
}

console.log(solution('CBA', 'CBDAGE'));
