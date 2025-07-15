import React, { useState } from 'react';

// 엘리먼트 변수 : 엘리먼트(컴포넌트에 데이터까지 심어놓은 것)를 변수에 저장(지정)

function LoginButton(props){ // 첫글자 대문자는 컴포넌트를 만들겠다
    return <button onClick={props.onClick}>로그인</button>
}

function LogoutButton(props){
    return <button onClick={props.onClick}>로그아웃</button>
}

function LoginControl(props){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 상태에 따라 다른 버튼을 렌더링
    let btn;

    if(isLoggedIn){
        btn = <LogoutButton onClick={()=>{setIsLoggedIn(false)}}/>
    } else {
        btn = <LoginButton onClick={()=>{setIsLoggedIn(true)}} />
    }

    return btn;
}


function App() {
    return <LoginControl />
}

export default App;