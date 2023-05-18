function solution(price, money, count) {
  let num = 0;
  for (let i = 1; i <= count; i++) {
    num += price * i;
  }
  let result = num - money;
  if (0 >= result) {
    return 0;
  } else {
    return result;
  }
}
