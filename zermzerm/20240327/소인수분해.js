/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120852
 * 문제 풀이 포인트: while, Set
 * 나의 실수:
 */

const solution = (n) => {
  let answer = new Set();
  let index = 2;
  while (n != 1) {
    if (n % index === 0) {
      n /= index;
      answer.add(index);
    } else {
      index++;
    }
  }
  return [...answer];
};

console.log(solution(12));
