
/*
    컴포넌트(하나하나 만드는 구조)
        - 클래스형  : 기존부터 사용 
        - 함수형    : 최근에 부각
*/
// const { Component } = require("react");
import { Component } from "react"; // React 모듈에서 Component를 불러옴
import "../App.css"; // CSS 파일을 불러옴

// 클래스형 컴포넌트
// [1] 컴포넌트 클래스를 상속받기
// [2] render() 함수가 필요
class App extends Component{
    // 렌더링 : 브라우저에 화면을 출력
    render(){
        // 자바스크립트 주석1
        /* 자바스크립트 주석2 */

        return ( // 이 안에 있는 애들을 바깥으로 내보낼 거야
        
            // return 안에는 반드시 하나의 최상위 태그만 있어야 함
            <div className="App">  {/* className은 HTML의 class와 동일한 역할을 함 */}
                
                {/* 여기 영역은 JSX 문법 영역 */}
                {/* 태그 안에 주석 Ctrl / */}

                <div className="App-link">안녕하세요</div>
                <div className="App-logo">리액트 클래스형 컴포넌트입니다.</div>
                <hr/>
                <img src='../logo192.png' />
            </div>
        );
    }
}

// 바깥에서 사용할 수 있도록 export
export default App;