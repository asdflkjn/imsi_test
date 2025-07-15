// [예시] <h2> ooo님, 반값습니다 </h2>

import { render } from '@testing-library/react';
import '../App.css';
import { Component } from 'react';


function FuncHello(props){
    return(
        <h2>{props.name}님, 반갑습니다</h2>
    )
}

class ClassHello extends Component{
    render(){
        return(
            <h2>{this.props.name}님, 반갑습니다</h2>
        )
    }    
}

function App(props){
    return(
        <div className="App">
            <FuncHello name="홍길동" />
            <ClassHello name="이순신" />
        </div>      
    )
}

export default App;