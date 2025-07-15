/*
    변수 선언
        - var   : 
        - let   : 재선언 안 됨 (변수를 한 번 선언하면 같은 변수를 쓸 수 없음)
        - const : 재설정 안 됨 (값을 한 번 설정하면 그 값을 변경할 수 없음)
*/

let msg_a = '안녕하세요';
let msg_b = "반값습니다";

let old_msg = msg_a + " " + msg_b;

const new_msg = `${msg_a} ${msg_b}`;
console.log(old_msg)
console.log(new_msg)

const num1 = 100;
const num2 = 200;
// 100 * 200 = 20000 출력
const num3 = `${num1 * num2}`
console.log(num3)



