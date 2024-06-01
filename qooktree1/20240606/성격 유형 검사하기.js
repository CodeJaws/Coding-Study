/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * 문제 풀이 포인트: switch case, 객체로 모든 MBTI를 정의하여 이용
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. surveyObj라는 모든 MBTI를 0으로 초기화한다.
 * 2. choices를 반복문으로 돌리면서 점수를 매긴다.
 * 3. MBTI 순서에 따라 정답을 구한다.
 */

const solution = (survey, choices) => {
  let answer = "";
  const surveyObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  choices.forEach((choice, idx) => {
    switch (choice) {
      case 1:
        surveyObj[survey[idx][0]] += 3;
        break;
      case 2:
        surveyObj[survey[idx][0]] += 2;
        break;
      case 3:
        surveyObj[survey[idx][0]] += 1;
        break;
      case 5:
        surveyObj[survey[idx][1]] += 1;
        break;
      case 6:
        surveyObj[survey[idx][1]] += 2;
        break;
      case 7:
        surveyObj[survey[idx][1]] += 3;
        break;
    }
  });
  answer += surveyObj["R"] >= surveyObj["T"] ? "R" : "T";
  answer += surveyObj["C"] >= surveyObj["F"] ? "C" : "F";
  answer += surveyObj["J"] >= surveyObj["M"] ? "J" : "M";
  answer += surveyObj["A"] >= surveyObj["N"] ? "A" : "N";
  return answer;
};
