
// 함수형 컴포넌트

import { useState } from "react";

function Counter(){
    
    let [number, setCount] = useState(0);

    const handleClick = () => {
        setCount(number + 1);
    };
    
    return(
        <div>
            <h3> 숫자 증감 </h3>
            <p> 값 : { number} </p>
            <hr/>
            <input type="button" value='+' onClick={handleClick}></input>
            <input 
                type="button" 
                value='-' 
                onClick={
                () => {
                    setCount(number - 1);
                }
            }></input>
        </div>
    )
}



// class ClassComponent extends Component{

//     constructor(props){
//         super(props) // 부모로 넘겨
//         // 정적 변수 선언 -> 값 변경 안됨
//         // this.data = 100;
    
//         // 값 변경 변수
//         this.state = { 
//             number : 0
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h3> 클래스 컴포넌트 </h3>
//                 <p> 숫자 : {this.state.number} </p>
//                 <hr/>
//                 {/* onClick={} 안에는 반드시 함수가 들어가야 함 */}
//                 <input type="button" value='확인1' onClick={
//                     function(){
//                         // 0부터 100앞에까지 임의의 정수를 나오게 한다
//                         this.setState({ number: Math.ceil(Math.random()*100)})
//                     }.bind(this)
//                 }></input> 
//                 <input type="button" value='확인2' onClick={
//                     () => {this.setState({ number: 200})}
//                 }></input>

//             </div>
//         )
//     }

// }

export default Counter;