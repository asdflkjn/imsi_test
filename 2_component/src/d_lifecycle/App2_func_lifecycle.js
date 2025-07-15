import { useEffect, useState } from "react";

function FuncComp(){

    var [number, setNumber] = useState(0);

    // 클래스 컴포넌트: componentDidMount / componentDidUpdate / componentWillUnmount 
    // 함수형 컴포넌트: ==> useEffect()

// useEffect는 "컴포넌트가 화면에 나타나거나, 값이 바뀔 때 자동으로 실행되는 함수"입니다.
// 쉽게 말해:
// 화면에 처음 나타날 때
// 값이 바뀔 때
// 화면에서 사라질 때
// 이럴 때마다 자동으로 실행되는 코드를 넣고 싶을 때 useEffect를 사용합니다.
// 예: 데이터 불러오기, 콘솔 출력, 타이머 설정 등.
// use 로 시작하는 함수를 훅이라고 부른다. useState, useEffect. 성능 등을 위해 만들어줌

    useEffect(function(){
        console.log('useEffect()호출')
    })

    return(
        <div>
            <h3>함수형 컴포넌트</h3>
            <p> Number : { number } </p>
            <input type='button' value='눌려' onClick={ function(){
            setNumber( Math.round(Math.random()*100))
            } }></input>
        </div>
    )

}

export default FuncComp;