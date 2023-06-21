// [문제 이름]
// : 교육과정 설계

// [문제 링크]
// : https://alpago-study.notion.site/9a8f62b0153b4d639803cf5ed5d59b45?p=a2baa2b4b511410cac83dc78c79e3d01&pm=c

const education = (essentialSubject, schedule) => {
  const queue = essentialSubject.split('');
  const scheduleArr = schedule.split('');
  let answer = 'YES';

  scheduleArr.forEach((subject) => {
    if (queue.includes(subject)) {
      // 멘토스 ㅎㅎ
      if (subject !== queue.shift()) answer = 'NO';
    }
  });

  if (queue.length) answer = 'NO';

  console.log(answer);
};

education('CBA', 'CBDAGE');
