
// [1] function 명령어
function func1(first, second) {
    return first + second;
}

// [2] funcion literal(변수의 값) : 함수가 변수의 값이 될 수 있는 것
let func2 = function(first, second){
    return first + second;
};

// [3] arrow function : 화살표 함수, 축약형 
let func3 = (first, second) => { return first + second; };

// [4] arrow function 축약형
let func4 = (first, second) => first + second; // 중괄호 없이 바로 리턴


console.log(func1(1,2)); // 3
console.log(func2(1,2)); // 3
console.log(func3(1,2)); // 3
console.log(func4(1,2)); // 3

class MyClass {
    value = 10;
    constructor(name) {
        
        var func2_add = function(first, second){
            return this.value + first + second;
        }.bind(this); // bind(this)로 this를 MyClass의 인스턴스로 바인딩

        console.log('확인2:' + func2_add(1,2));

        var func3_add = (first, second) => this.value + first + second;
        console.log('확인3:' + func3_add(3,4));
    }
}

var my = new MyClass('홍길동');

//결론: 함수의 종류는 3가지, 그중에서 
// 리액트에서는 함수를 바인딩하기 귀찮아서 arrow 함수를 많이 쓴다. 