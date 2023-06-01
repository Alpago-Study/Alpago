function solution(a, b) {
  // 2016년이 기본 값
  // 2016년은 윤년, 윤년식별할 필요 없음, 2월은 29일
  // 2016년 a월b일이 무슨 요일인지 리턴하는 함수
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const whenDate = new Date(2016, a - 1, b); // a는 Date함수에서 인덱스이기 때문에 -1을 해줘야 원하는 월을 표기 가능
  const dayOfWeek = whenDate.getDay(); // getDay() 메서드를 이용해서 whenDate의 요일을 얻을 수 있음

  return days[dayOfWeek]; // getDay는 월화수목금토일을 0~6의 숫자로 반환하기 때문에 days의 배열의 인덱스로 활용해서 리턴해야함
}
