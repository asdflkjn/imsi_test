//9_module.js

let base = 100;
const getBase = () => base;

const add = x => x + base; // base를 더하는 함수
const multiply = x => x * base; // base를 곱하는 함수


export {add, multiply}; // add와 multiply 함수를 내보냄. 다른 모듈에서 사용할 수 있도록.
export default getBase; // export default로 모듈을 내보냄. 디폴트로 바깥으로 뺄거야.



/*
var base = 100;
function getBase() {
    return base;
}

function add(x) {
    return x + base;
}
*/