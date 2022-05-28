
// 프로그래머스 Lv1 시저 암호

// 공백문자(SP):32, A:65 , Z: 90, a:97, z:122
// ex) b(98)를 옆으로 25칸 밀면 a(97)가 나와야 함.
// b: 98, 98 + 25 = 123이므로 기대값 97과는 다름.
// word가 대문자고 word + n > 90인 경우 혹은 word가 소문자고 word + n > 122일 경우 26을 빼주면 됨.

// 0.07~0.14ms, 최대 6.77ms, 29.7~34.1MB
function solution(s, n) {
let answer = "";
for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
    answer += " ";
    continue;
    }
    if (
    (s.charCodeAt(i) >= 65 &&
        s.charCodeAt(i) <= 90 &&
        s.charCodeAt(i) + n > 90) ||
    (s.charCodeAt(i) >= 97 &&
        s.charCodeAt(i) <= 122 &&
        s.charCodeAt(i) + n > 122)
    ) {
    answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
    } else {
    answer += String.fromCharCode(s.charCodeAt(i) + n);
    }
}
return answer;
}

solution("bC", 25);