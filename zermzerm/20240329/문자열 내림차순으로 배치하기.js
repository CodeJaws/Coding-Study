/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * 문제 풀이 포인트: x
 * 나의 실수: 그냥 정렬하면 되는구나...
 */

const solution = (s) => {
  const small = [],
    big = [];
  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toUpperCase() ? big.push(s[i]) : small.push(s[i]);
  }
  return small.sort().reverse().join('') + big.sort().reverse().join('');
};

//다른 사람 풀이 -> 1이면 앞으로 온다 -1이면 뒤로 온다.
// function solution(s) {
//   return s
//     .split('')
//     .sort((a, b) => (a < b ? 1 : -1))
//     .join('');
// }

//아스키코드로 풀어봄
// function solution(s) {
//   return s
//     .split('')
//     .sort((a, b) => b.charCodeAt() - a.charCodeAt())
//     .join('');
// }

console.log(solution('Zbcdefg'));
