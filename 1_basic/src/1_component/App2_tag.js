/*
    리액트의 장점 (사용이유)

    1. 태그 재사용
    2. 태그에다가 데이터를 바인딩
*/
import { Component } from "react";
import "../App.css";

function MyHeader(){ //함수형 컴포넌트
    return(<div>
        <h1 className="App-link">우리 사이트</h1>
        <hr/>
    </div>);
}

class MyFooter extends Component{ //클래스형 컴포넌트
    render(){
        return(
            <div className="App-logo">
                <h2>광고 사이트</h2>
            </div>
        );
    }
}

function App(){
    return(
        <div className="App">
            <MyHeader></MyHeader>
            <MyHeader/>
            <hr/>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
        </div>
    );
}

export default App;