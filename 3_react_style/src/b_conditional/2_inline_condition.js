
/*
    [1] && 연산자 -> if문 동일한 효과
        ㄴ논리연산자
        - true  && expression => expression (뒤에가 중점)
        - false && expression => false (앞에가 중점)

    [2] 삼항연산자 -> if~else 동일한 효과
        ㄴ조건?참일경우:거짓인경우
*/

import { useState } from "react";


function Counter(props) {

    const [count, setCount] = useState(0);

    return(
        <div>
            {/* 이해하기 */}
            {count && <h3>현재 카운트: {count}</h3>} 
            <hr/>
            <button onClick={()=> setCount((count)=>count+1)}>눌러</button>
        </div>  
    )
}

function MailBox(props){

    const unreadMessages = props.data;

    return(
        <div>
            <h1>나의 메일 함</h1>
            {
                unreadMessages.length > 0 &&
                    <h3>
                        현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
                    </h3>
            }
        </div>
    )
}

function App() {

    var msg = []
    var msg2 = ['광고메일', '회의메일', '안부메일']
    
    return(
        <div>
            <Counter/>
            <Counter/>
            <hr/>
            <MailBox data={msg}/>
            <MailBox data={msg2}/>

        </div>
    )
}

export default App;