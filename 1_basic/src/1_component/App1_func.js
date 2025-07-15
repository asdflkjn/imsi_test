
/*
    컴포넌트
        -클래스형
        -함수형
            `첫글자를 대문자로
            `render() 함수가 필요없음
*/

import "../App.css";

function App(){

    return(
        <div className="App"> 
            <div className="App-link">안녕하세요</div>
            <div className="App-header">리액트 클래스형 컴포넌트입니다.</div>
            <hr/>
            <img src='../logo192.png' />
        </div>
    );
}

export default App;