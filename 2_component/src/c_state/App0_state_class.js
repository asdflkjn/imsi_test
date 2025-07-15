import { Component } from "react";

class ClassComponent extends Component{

    constructor(props){
        super(props) // 부모로 넘겨
        // 정적 변수 선언 -> 값 변경 안됨
        // this.data = 100;
    
        // 값 변경 변수
        this.state = { 
            number : 0
        }
    }

    render(){
        return(
            <div>
                <h3> 클래스 컴포넌트 </h3>
                <p> 숫자 : {this.state.number} </p>
                <hr/>
                {/* onClick={} 안에는 반드시 함수가 들어가야 함 */}
                <input type="button" value='확인1' onClick={
                    function(){
                        // 0부터 100앞에까지 임의의 정수를 나오게 한다
                        this.setState({ number: Math.ceil(Math.random()*100)})
                    }.bind(this)
                }></input> 
                <input type="button" value='확인2' onClick={
                    () => {this.setState({ number: 200})}
                }></input>

            </div>
        )
    }

}

export default ClassComponent;