
function orderA(){
    console.log('A 작업')
    // 만일 이 작업 시간 소요가 많다면?
}

function orderB(){
    console.log('B 작업')
}

function orderC(){
    console.log('C 작업')
}

orderA();
orderB();
orderC();

// 동기화 : A 작업이 끝나고 B 작업이 시작되고, B 작업이 끝나고 C 작업이 시작된다.
// 비동기화 : A 작업이 끝나지 않아도 B 작업이 시작되고, B 작업이 끝나지 않아도 C 작업이 시작된다.