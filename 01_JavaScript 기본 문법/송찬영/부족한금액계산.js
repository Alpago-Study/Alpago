function solution(price, money, count) {
  let num = 0;
  for (let i = 1; i <= count; i++) {
    num += price * i;
  }
  return num - money;
  //시간초과로 실패
}
