// [문제 이름]
// : 삼각형의 완성조건 (1)

// [문제 설명]
// : 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//  가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//  삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/120889


function solution(sides) {
    
    sides.sort((a, b) => a - b)  // 원본 배열이 정렬됨
    if(sides[0]+ sides[1] > sides[2]){
        return 1;
    } else{
        return 2;
    }
    
//     let max = 0;
//     let Sum = 0; // 일반삼각형의 2변의 합 더하는 변수
//     let Sum2 = 0; // 이등변삼각형, 정삼각형의 2변의 합 더하는 변수 (max값이 2개 이상일경우)
    
//     // 배열에서 가장 큰값을 max 에 저장
//     for(let i = 0 ; i < sides.length ; i++){
//         if(sides[i] >= max ){
//             max = sides[i];
//         }
//     }
    
//     // max를 제외한 나머지 값 더하기
    
//     for(let i = 0 ; i < sides.length ; i++){
//         if(sides[i] !== max ){
//             Sum = Sum + sides[i];
//         } else{
//             Sum2 = Sum2 + sides[i];
//         }
//     }
    
//     Sum2 = Sum2 - max; //이등변, 정삼각형인경우 3변 일단 다 더하고 max값 한번 빼기
    
//     if(Sum > 0 && Sum > max){ 
//         return 1;
//     } else if (Sum2 > 0 && Sum2 > max){
//         return 1;
//     }else {
//         return 2;
//     }

}


console.log(solution([3, 6, 2]))
console.log(solution([199, 72, 222]))

