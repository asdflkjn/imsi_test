
async function init(){ // async 키워드를 붙여서 함수를 통으로 비동기 함수로 만들어줄거야
    const response = fetch("https://jsonplaceholder.typicode.com/users"); // fetch한 결과를 바로 response라는 변수에 담을거야
    const users = await response.json(); // await: 이거 다 끝나면 변수에 담아줘. response가 끝날 때까지 기다려줘.
    users.forEach(user => {
        console.log(user['name'] + "/" + user['address']['city']); 
    })
}

init();

console.log('다른 작업중');
// then을 쓰거나 await를 쓰거나
