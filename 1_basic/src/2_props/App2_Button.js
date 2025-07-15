
/*
    - 컴포넌트와 엘리먼트
    
    - props
        ` 컴포넌트에 전달되는 데이터 객체.
        ` read-only : 전달받은 데이터는 수정할 수 없음.
    
    - 컴포넌트 방식
        ` 클래스
        ` 함수형(function)    
        => 첫글자를 대문자로
*/

import '../App.css'; // ;안찍어도 되긴 함.

function Button(props){ // 컴포넌트 만들 때 props 쓰고 시작하면 됨.(사용한다) 
    return(
        <button className={`App-${props.css}`}>
            {/* JSX 문법 */}
            {props.label} {/* props를 통해서 label을 찍고 싶어 */}
        </button>
    ) // 안찍어도 됨
}

function App(props){ // App을 최상위로 쓸거야. / 얘만 바깥으로 빼진다.
    return(
        <div className="App">
            <Button label='확인1' css='link'/>
            <Button label='확인2' css='header'></Button>
            {/* <Button></Button> 안쪽에 값을 넣을 거면
              */}
        </div>
    ) // 안찍어도 될듯
}

export default App; // 최상위를 바깥으로 뺀다.


// import '../App.css'

// function Button(props){
//     return (
//         <button className={`App-${props.css}`}>
//             {/* JSX 문법 */}
//             {props.label}
//         </button>        
//     )
// }

// function App(props){
//     return(
//         <div className="App">
//             <Button label='확인1' css='link'/>
//             <Button label='확인2' css='header'></Button>
//         </div>
//     )
// }

// export default App;