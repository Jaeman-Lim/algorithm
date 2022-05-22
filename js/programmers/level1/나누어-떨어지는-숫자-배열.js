/**
 *  프로그래머스
 *  나누어 떨어지는 숫자 배열 Lv1
 *  array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
 *  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 * 
 * 제한사항
 * 1. arr은 자연수를 담은 배열입니다.
 * 2. 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
 * 3. divisor는 자연수입니다.
 * 4. array는 길이 1 이상인 배열입니다.
 */

// 1. reduce 사용
function solution(arr, divisor) {
    return arr.reduce((acc, cur, i) => {
        if (cur%divisor == 0) acc.push(cur);
        if (arr.length -1 === i && acc.length === 0) acc.push(-1)
        return acc
    }, []).sort((a, b) => a - b);
}

// 2. forEach 사용
function solution(arr, divisor) {
    let answer = [];

    arr.forEach(e => {
        if (e%divisor == 0) answer.push(e)
    });

    answer.length > 0 ? answer.sort((a, b) => a - b) : answer.push(-1);

    return answer
}