// [0] 기본 자바스크립트

// var queryString = 'kind=it&title=python&cnt=3'; // 문자열 -> 객체 형식으로 풀고 싶어
// var chunks = queryString.split('&');
// console.log(chunks)
// var result = {};

// for(var i = 0; i < chunks.length; i++) {
//     var parts = chunks[i] = chunks[i].split('=');
//     // console.log(parts);
//     var key = parts[0];
//     var value = parts[1];
//     result[key] = value; // 객체에 넣어
// }

// console.log(result);

// [1] forEach()
// var queryString = 'kind=it&title=python&cnt=3'; 
// var chunks = queryString.split('&');
// var result = {};

// chunks.forEach((chunk)=>{
//     const [key, value] = chunk.split('=');
//     result[key] = value;
// })

// console.log(result);


// [2] map() : 리턴값을 받을 수 있음

var queryString = 'kind=it&title=python&cnt=3'; 
var chunks = queryString.split('&');
var result = chunks.map((chunk)=>{
    const [key, value] = chunk.split('=');
    return {key, value};
});

console.log(result);

// 자바스크립트에서 반복문 돌릴거면 forEach()를 많이 쓰고, 리턴값을 받을거면 map()을 많이 씀
// forEach()는 리턴값이 없고, map()은 리턴값이 있음