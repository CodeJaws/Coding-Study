/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181881
 * 문제 풀이 포인트: 문제 이해
 * 나의 실수: 더 나은 방법은 뭘까?
 */

const solution = (arr) => {
  let cnt = 0;
  while (true) {
    let changeArr = [...arr];
    for (let i = 0; i < changeArr.length; i++) {
      if (changeArr[i] >= 50 && changeArr[i] % 2 === 0) changeArr[i] /= 2;
      else if (changeArr[i] < 50 && changeArr[i] % 2 === 1)
        changeArr[i] = changeArr[i] * 2 + 1;
    }
    if (changeArr.toString() === arr.toString()) return cnt;
    else {
      cnt++;
      arr = changeArr;
    }
  }
};

console.log(solution([1, 2, 3, 100, 99, 98], 5));
