
/*
    useState() : state를 생성하는 함수
    state: 값 변경하여 렌더링되는 변수

*/

import { useState } from "react";

const App = () => {

    const [msg, setMsg] = useState('인사말을 입력하세요');

    return(
        <div>
            <input type="text" onChange={(e)=>{setMsg(e.target.value)}}></input>
            <br/>
            <div> 입력메시지 : {msg} </div>
        </div>
    )
}

export default App;

// 회원가입할 때 사용자 입력값을 받는 모든 변수는 useState를 사용해야 한다.