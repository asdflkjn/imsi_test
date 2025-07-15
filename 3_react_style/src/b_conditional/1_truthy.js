
import React, { useState } from 'react';

function MemberGreeting(props){
    return <h1>오늘도 반갑습니다</h1>
}

function GuestGreeting(props){
    return <h2>회원가입을 해주세요</h2>  
}

function Greeting(props) {

    // const isLoggedIn = true;
    // const isLoggedIn = false;

    // false == NaN == undefined == null =='' == 0
    // true == '0' == -1 == 1 == [] == {}

    // const isLoggedIn = ''; //false
    // const isLoggedIn = []; // true
    // const isLoggedIn = {}; // true
    // const isLoggedIn = 0; // false
    // const isLoggedIn = -1; // true
    // const isLoggedIn = 1; // true

    const isLoggedIn = props.isLoggedIn; // 부모 컴포넌트에서 isLoggedIn 값을 받아옵니다.

    if(isLoggedIn) return <MemberGreeting />
    else return <GuestGreeting />
}

function App(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 추가작업 '변경' 버튼을 클릭하면 Greeting 컴포넌트 안에 isLoggedIn의 값이 변경되어야 합니다.
    return (
        <div>
            {/* <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>변경</button> */}
            <button onClick={()=> setIsLoggedIn((isLoggedIn)=>!isLoggedIn)}>변경</button>
            <hr/>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    )
}

export default App;