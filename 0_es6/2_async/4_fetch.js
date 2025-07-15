// 

fetch("https://jsonplaceholder.typicode.com/users") // 어느 사이트를 갔다올거야
    // .then( response=>{ console.log(response) } ); // 갔다와서 뭐 할거야. response는 그냥 변수명(fetch를 통해서 결과를 받는 애). 어떤 변수명이 오는데 그 결과를 뭐로 받을거냐
//      response는 자체가 객체 -> 제이슨으로 바꿔줘야 함.
//    .then( response => response.json() ) // 제이슨으로 바꿔줘. {response.json()} 중괄호
//    .then(  response => { return response.json()} ) // 제이슨으로 바꿔줘. {response.json()} 중괄호
//    .then( users => { console.log(users) } ) // 제이슨으로 변환한 결과를 users라는 변수에 담아줘
    .then( response => response.json() )
    .then ( users => { // users는 집합
        users.forEach( user => {
            // console.log(user.name);
            console.log( user['name'] + "/" + user['address']['city'] ); // 도시 뽑기
        } ) // 배열에서 하나씩 뽑은 애를 user라고 할거야
    } );

console.log('다른 작업 중'); // 먼저 나왔다는 게 포인트
// 화면은 화면작업 하고 있도록 하고, 네트워크를 타고 서버에 갔다와서 데이터를 받아올거야. 



