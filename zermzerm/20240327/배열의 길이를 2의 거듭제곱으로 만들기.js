/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181857
 * 문제 풀이 포인트: while, for?
 * 나의 실수: 문제를 잘 읽자, 등호를 잘 생각하자.
 */

const solution = (arr) => {
  let answer = [...arr];
  let n = 1;
  let cnt = 0;
  while (arr.length > n) {
    n *= 2;
    cnt++;
  }
  for (let i = 0; i < Math.abs(arr.length - 2 ** cnt); i++) {
    answer.push(0);
  }
  return answer;
};

console.log(solution([1, 2, 3, 4, 5, 6]));
