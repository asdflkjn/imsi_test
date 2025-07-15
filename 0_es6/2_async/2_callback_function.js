// 콜백 함수와 비동기 처리

function order(coffee, callback){ // order함수의 인자가 넘어와서 받을 때
    console.log(`${coffee} 주문`);
    setTimeout(() => { // 앞에가 함수, 뒤에가 숫자. 2초후에 이 함수가 불려진다.
        callback(coffee); // 콜백 함수 호출, callback: 어느 순간에 불려질거야.
    }, 2000);
}

function pickup(result){
    console.log(`${result} 준비 완료`)
}

order('카페라떼', pickup);

console.log('다른 작업가능')