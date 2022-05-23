/**
 *  프로그래머스
 *  문자열 내 마음대로 정렬하기 Lv1
 *  ref: https://programmers.co.kr/learn/courses/30/lessons/12915
 */

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return -1;
    if (a[n] < b[n]) return 1;
    if (a[n] === b[n]) {
      if (a > b) return -1;
      if (a < b) return 1;
    }
  });
}

function solution(strings, n) {
  return strings.sort((a, b) => {
    //1.n번째 글자 기준 정렬
    //2.동일 시 원단어 기준으로 정렬
    const letterA = a.charCodeAt(n);
    const letterB = b.charCodeAt(n);
    if (letterA < letterB) {
      return -1;
    }
    if (letterA > letterB) {
      return 1;
    }
    if (letterA === letterB) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
    }
  });
}

/**
 * [Refactoring Version 1]
 * - Sorting non-ASCII characters (localeCompare 함수 사용)
 */
// function solution(strings, n) {
//   return strings.sort((a, b) => {
//     const letterA = a.charCodeAt(n);
//     const letterB = b.charCodeAt(n);
//     if (letterA === letterB) {
//       return a.localeCompare(b);
//     } else {
//       return a[n].localeCompare(b[n]);
//     }
//   });
// }

/**
 * [Refactoring Version 2]
 * - string 객체(array-like object)에 inex로 접근
 */
// function solution(strings, n) {
//   return strings.sort((a, b) => {
//     return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
//   });
// }
