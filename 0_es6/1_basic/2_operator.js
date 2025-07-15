// [1] 논리연산자 결합

var arr = ['one', 'two'];
let first = arr[0];
let third = arr[2];

// console.log(first); // 'one'
// // console.log(second); // 에러
// console.log(third); // 

// // 논리연산자와 결합 : 중심이 되는 애가 출력
// console.log(first||'empty'); // 'one'
// console.log(third||'empty'); // 'empty'

// [2] 삼항연산자 : 자바는 잘 안쓰자, 자바스크립트는 많이 쓰여
// truthy: true값으로 처리하는 애 , falsy: false 값으로 처리하는 애

// 전부 다 참
// let truthy = true;
// let truthy = 1; // 0이 아닌 모든 숫자는 true로 취급
// let truthy = -1; // -1도 참
// let truthy = "0"; // 문자 0
// let truthy = 'false'; // 문자열로 변경되었다면 (네트워크를 타고 왔다면 문자열로 변경되는 경우가 많다.)
// let truthy = []; // 자바스크립트는 빈배열도 true
// let truthy = {}; // 자바스크립트에서는 빈 객체, 파이썬에서는 빈 딕셔너리

// let samhang = truthy? "참" : "거짓";
// console.log("truthy:" + samhang);

// 전부 다 거짓
// const falsy = false;
// const falsy = 0; 
// const falsy = ''; // 빈 문자열
// const falsy = null;
// const falsy = undefined;
// const falsy = NaN; // 파이썬에서는 결측치(값이 깨진 것)를 통틀어서 부름, 자바스크립트에서는 not a number(숫자 아니야)

// const samhang = falsy? '참' : '거짓' ;
// console.log('falsy:' + samhang)

// [3] 요소 분해 unpacking
let list = [100, 200]; // 집합이 있으면 
let [item1, item2, item3=1004] = list; // 요소를 하나 하나 해서 쓸거야
// console.log(item1);
// console.log(item2);
// console.log(item3); // undefined

// 스와핑
[item2, item1] = [item1, item2];
// console.log(item1);
// console.log(item2);

// [4] 전개연산자(...)

var objOne = { hana:1, dul:2, gita:0 };
var objTwo = { sam:3, sa:4, gita:-1 };
var old_combined = {
    hana: objOne.hana,
    dul: objOne.dul,
    gita: objOne.gita,
    sam: objTwo.sam,
    sa: objTwo.sa,
    gita: objTwo.gita
}
console.log(old_combined);

var new_conbined = {...objOne, ...objTwo};
console.log(new_conbined);

// let {gita, ...others} = new_conbined;
// console.log(gita);
// console.log(others);

const {dul, ...others} = new_conbined;
console.log(new_conbined);
console.log(dul);
console.log(others);

console.log(objOne);
console.log(objTwo);

let origin = {name:'홍길동', age:22, dept:'IT'}
let temp = origin;
temp.name = '이순신';
// console.log(temp);
// console.log(origin);

let origin2 = {name:'홍길동', age:22, dept:'IT'}
let temp2 = {...origin2, name:'이순신'} //origin을 풀어서 쓴 것
console.log(temp2);
console.log(origin2);




