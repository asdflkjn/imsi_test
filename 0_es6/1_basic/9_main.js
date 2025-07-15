
import getBase from './9_module.js'; // 9_module.js에서 getBase를 가져옴. import 먼저 나온다.

import {add, multiply}  from './9_module.js'; // 9_module.js에서 모든 것을 가져옴. import는 여러개 가능하다.

console.log(getBase()); // getBase를 실행해서 base 값을 가져옴. 100이 나옴.
// console.log(add(5)); // add 함수를 실행해서 5 + base 값을 가져옴. 105가 나옴.
console.log(multiply(5)); // multiply 함수를 실행해서 5 * base 값을 가져옴. 500이 나옴.



