// 비동기, 다른 작업 할 수 있나 없나
const likeCoffee = true;

const coffee = () => {
    return new Promise((resolve, reject)=>{
        if(likeCoffee) resolve('커피를 주문한다'); // resolve: 성공했을 때
        else reject('커피를 주문하지 않는다'); // reject: 실패했을 때
    }); // Promise 클래스를 리턴, 그안에 함수를 리턴한다.
};

function order(message) {
    console.log(message);

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('커피를 포장한다'); // 2초 후에 성공 메시지를 리턴
        }, 2000);
    }); // 함수를 인자로 받아서 생성, 인자를 2개 받는다.
}

coffee()
    .then( result => order(result) ); // 커피를 주문한 후에 order 함수를 실행, 인자가 하나면 소괄호() 생략 가능

console.log('다른 작업 가능'); // 비동기 처리로 인해 다른 작업을 할 수 있다. Ponint★





/*
    function coffee() {
    }


*/