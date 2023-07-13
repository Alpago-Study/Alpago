// [문제 이름]
// : 단어 공부 (1157번)

// [문제 설명]
// : 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// [문제 링크]
// : https://www.acmicpc.net/problem/1157

// 백준 제출용 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
    // 각 알파벳이 몇번 나왔는지 세기 위한 객체 생성
    let obj = {
        A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0,
        H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0,
        O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0,
        V: 0, W: 0, X: 0, Y: 0, Z: 0
    }
    // 대소문자 구분이 없기 때문에 인자로 들어온 문자열을 전부 대문자로 바꿔준다
    str = str.toUpperCase();

    // 문자열을 for문으로 반복하며 알파벳 갯수 세기
    for (let i = 0; i < str.length; i++) {
        obj[str[i]]++
    }

    // 가장 큰 수를 찾아서 해당 수가 여러개 있으면 "?"를 출력하고, 그렇지 않다면 해당 수를 가진 키값 출력
    let maxNum = Math.max(...Object.values(obj));
    if (Object.values(obj).indexOf(maxNum) !== Object.values(obj).lastIndexOf(maxNum)) return "?";
    
    return Object.keys(obj).find(key => obj[key] === maxNum);
}

console.log(solution(input));