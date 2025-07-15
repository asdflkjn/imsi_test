/*
    MyHeader 컴포넌트

    <header>
        <h1> 제목 </h1>
        <p>  내용 </p>
    </header>
*/

import { Component } from "react";

// 함수형 컴포넌트 만들기
// function MyHeader(props){ // props를 통해서 전달받은 값을 사용
//     console.log(props); // props를 찍어보자. 어떤 값이 들어오는지 확인해보자.

//     // props.title = '제목변경'; // props는 read-only이므로 수정할 수 없다.
//     let mytitle = props.title + '변경'; // 새로운 변수를 만들어서 우회하는 방법

//     return(
//         <header>
//             <h1>{props.title}</h1> {/* props를 통해서 title을 찍고 싶어 */}
//             <h4>{mytitle}</h4>
//             <p>{props.content}</p> {/* props를 통해서 content를 찍고 싶어 */}
//         </header>
//     )
// }

// 클래스형 컴포넌트 만들기
class MyHeader extends Component {
    render(){

        let mytitle = this.props.title + '변경'; // 클래스는 멤버변수를 잡아서 사용.

        return(
            <header>
                <h1>{this.props.title}</h1> 
                <h4>{mytitle}</h4>
                <p>{this.props.content}</p> 
            </header>
        )  
    }   
}



function App(){
    return(
        <div className="App">
            <MyHeader title='자바' content='즐거운 자바'></MyHeader> 
            <MyHeader title='파이썬' content='재밌는 파이썬'></MyHeader>
        </div>    
    )
}

export default App;