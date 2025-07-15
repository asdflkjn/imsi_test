
/* 
    리액트의 목적: 무조건 화면 출력이 빨라야 됨

    state : 컴포넌트에서 값의 변경이 필요한 데이터를 처리하는 객체 
    
    [클래스 컴포넌트인 경우]
    ` state 직접 변경은 안됨
    ` setState() 함수를 이용해서 값을 변경
    
    
*/

import { Component } from 'react';
import '../App.css';

class App extends Component{

    // let title = '우리동네'; 에러 : 클래스형 컴포넌트에서는 변수를 여기다 선언하면 안됨
    constructor(props){ // 이 함수 안에 변수를 만들거야

        super(props) // 부모의 생성자 함수를 불러줘

        // 정적인 데이터 : 한 번 지정하고 값을 변경하지 않을거야, 그냥 변수 선언이야.
        this.title = '우리동네 사이트'; // 멤버변수로 만들기 위해

        // 변경 데이터 : 값을 변경할 수 있는 변수로 취급할거야, state 안에다가 변수 선언해야해
        this.state = {
            favorite : '맛집정보'
        }
    }

    render(){
        return(
            <div className='App'>
                <h2>클래스형 컴포넌트에서 state 변경하기</h2>
                <div className='App-link'>{this.title}</div>
                <div className='App-subtitle'>{this.state.favorite}</div>
                <hr/>
                <button onClick={()=>{
                    this.title = "너네 동네 사이트";
                    console.log(this.title)
                }}>일반변수 변경하기</button><br/>
                
                <button onClick={()=>{
                    this.state.favorite = "우리집 맛집 변경";
                    console.log(this.state.favorite)
                    this.forceUpdate();
                    // this.forceUpdate: 강제로 화면 변경하는 함수
                }}>state변수 직접 변경하기</button><br/>

                <button onClick={()=>{
                    this.setState({favorite : '맛집 천하'})
                }}>state변수 setState() 함수로 변경하기</button><br/>
                {/* 결론 : setState를 쓰라 */}
            </div>
        )
    }
}

export default App;