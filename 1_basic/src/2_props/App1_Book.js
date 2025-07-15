import "../App.css";

// props(속성) : 컴포넌트에 전달되는 데이터, props로 받아서 데이터를 처리
function Book(props){ // Book 컴포넌트 정의, 이 컴포넌트를 반복/재사용하고 싶어
    return(
        <div>
            <h2>책 제목 : {props.title}</h2>
            <h4>저자 : {props.writer}</h4>
            <h5>가격 : {props.price}</h5>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>나의 도서 목록</h1>
            <Book title='자바' writer='자바쌤' price='10000'/>
            <Book title='파이썬' writer='파이썬쌤' price='20000'/>
            <Book title='리액트' writer='리액트쌤' price='30000'/>
        </div>
    );
}

export default App;