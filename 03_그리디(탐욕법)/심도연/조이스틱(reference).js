// [문제 이름]
// : 조이스틱

// [문제 설명]
// : 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
//   만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/42860

const solution = (name) => {
  let udCount = 0;
  // 정방향(right)로 가는게 기본값
  let lrCount = name.length - 1;

  const upDownUnicode = (char) => {
    // 앞에서 알파벳을 찾는게 빠른지, 뒤에서 알파벳을 찾는게 빠른지를 판단해주기 위한 함수
    if (char === 'A') return 0;
    const unicode = char.charCodeAt();
    // 65(A)에서 몇 칸을 이동했는지 확인하기 위해 해당 char 의 unicode 에서 뺀 것이다
    // 91(Z) = 90 + unicode + 1(Z를 포함하기 위해서)
    return Math.min(unicode - 65, 91 - unicode);
  };

  name.split('').map((n, i) => {
    // 알파벳을 선택할 때의 최솟값
    udCount += upDownUnicode(n);

    // 대망의 A 찾기...
    let nextIdx = i + 1;
    while (nextIdx < name.length && name[nextIdx] === 'A') {
      nextIdx++;
    }

    lrCount = Math.min(
      lrCount, // 정방향으로 가는 경우(커서 이동X)
      i * 2 + name.length - nextIdx, // 정방향으로 가다가 연속되는 A를 만난 경우(커서 이동O)
      i + 2 * (name.length - nextIdx) // 역방향으로 가다가 연속되는 A를 만난 경우(커서 이동O)
    );

    // B B A A A A C C
    // O O - - - -
    // i = 1 * 2 = 2
    // 8 - 6 = 2
  });

  return udCount + lrCount;
};

console.log(joy_stick('JEROEN'));
console.log(joy_stick('JAN'));
console.log(joy_stick('JAZ'));
