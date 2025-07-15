
// [1]
// (1) 
var obj = { result : 0 } // obj 안에 result라는 객체를 만든다.
obj.add = function(x, y){ // obj 안에 add라는 함수를 만든다.
    this.result = x + y; // this는 obj를 가리킨다. 
    console.log('this:' + this); // this를 출력한다. obj가 나온다.
} 
obj.add(2,3); // obj의 add 함수를 실행한다. 2와 3을 더해서 result에 저장한다.
console.log(obj);
console.log(obj.result); // obj의 result 값을 출력한다. 5가 나온다.
console.log('1> ----------------------------'); // 구분선

/*
var obj = {
    result : 0,
    add : function() {}
};
*/

// (2))
var obj = {};
var add = function(x, y) { // add라는 함수를 만든다.
    console.log('********this:' + this); 
    this.result = x + y; // this는 add 함수를 호출한 객체를 가리킨다.
}
add = add.bind(obj); // add 함수를 obj에 바인딩한다. this가 obj를 가리키게 한다.
add(2, 3); // add 함수를 실행한다. 2와 3을 더해서 result에 저장한다.
console.log(obj);
console.log(obj.result); // obj의 result 값을 출력한다. 5가 나온다.
console.log('2> ----------------------------'); // 구분선

// [2]-------------------------------------------------------------------------
// (1) 중첩함수(함수 안에 함수)인 경우
var obj = { result : 0 } // obj 안에 result라는 객체를 만든다.
obj.add = function(x, y){ // obj 안에 add라는 함수를 만든다.
    function inner(){ // inner라는 함수를 만든다.
        console.log('********this:' + this); 
        this.result = x + y; // this는 add 함수를 호출한 객체를 가리킨다.
    }
    inner(); // inner 함수를 실행한다.
}
obj.add(2,3); // obj의 add 함수를 실행한다. 2와 3을 더해서 result에 저장한다.
console.log(obj);
console.log(obj.result); // obj의 result 값을 출력한다. undefined가 나온다.
console.log('3> ----------------------------'); // 구분선

// (2))
var obj = { result : 0 } // obj 안에 result라는 객체를 만든다.
obj.add = function(x, y){ // obj 안에 add라는 함수를 만든다.
    function inner(){
        console.log('********this:' + this); 
        this.result = x + y; // this는 obj를 가리킨다. 
    }
    inner = inner.bind(this); // inner 함수를 obj에 바인딩한다. this가 obj를 가리키게 한다.
    inner(); // inner 함수를 실행한다.
}
obj.add(2,3); // obj의 add 함수를 실행한다. 2와 3을 더해서 result에 저장한다.
console.log(obj);
console.log(obj.result); // obj의 result 값을 출력한다. undefined가 나온다.
console.log('4> ----------------------------'); // 구분선

// [3] 화살표 함수
var obj = { result : 0 } 
obj.add = function(x, y){ 
    const inner = () => { this.result = x + y; };
    inner(); 
}
obj.add(2,3); 
console.log(obj);
console.log(obj.result); 
console.log('5> ----------------------------'); 

// 포인트: this가 누구를 가리킬까, 이 함수는 바인딩이 필요할까 필요하지 않을까