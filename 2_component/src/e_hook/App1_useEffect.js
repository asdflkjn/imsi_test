

/*
    # hook
        ` 함수형 컴포넌트에서만 호출
        ` 반복문이나 중첩함수 안에서 호출 안됨

    # useEffect()
        ` 클래스형 컴포넌트의 lifecycle 함수의 기능 수행
        -> 화면에 첨 떴을 때   / 값이 변경될 때마다    / 화면에 사라질 때
        -> componentDidMount / componentDidUpdate / componentWillUnmount 와 동일한 기능 수행
        ` useEffect(이벤트함수, 의존성배열)
            - 의존성 배열이 없는 경우 : 컴포넌트가 렌더링(마운트, 업데이트)될 때마다 실행됨
            - 의존성 배열이 있는 경우 : 배열 안의 값이 바뀔 때마다 실행됨 (componentDidUpdate)
            - 의존성 배열이 빈배열인 경우 : 렌더링될 때 호출됨, 컴포넌트가 처음 마운트될 때만 1번 실행됨 (componentDidMount)
*/

import { useEffect, useState } from "react";

function Form(){
    const [realname, setRealname] = useState('ㄲ')
    const [nickname, setNickname] = useState('ㅌ')

    useEffect(()=>{
        console.log(`본명:${realname} \t 별명:${nickname} \n`)

        return()=> { console.log(`~~~~Form 컴포넌트가 언마운트될 때`) }
    // }) // 의존성 배열 없는 경우 
    // }, [nickname]) // 있는 경우
    }, []) // 빈 배열인 경우 , 제일 많이 쓰는 패턴

    return(
        <div>
            <div>
                <span>본명 : {realname}</span>
                <input type="text" value={realname} onChange={(evt)=>{setRealname(evt.target.value)}}></input>
            </div>

            <div>
                <span>별명 : {nickname}</span>
                <input type="text" value={nickname} 
                        onChange={(evt)=>{setNickname(evt.target.value)}}/>
            </div>
        </div>
    )
}

function App(){

    const [isVisible, setIsVisible] = useState(true);

    return(
        <div>
            <button onClick={()=>{setIsVisible(!isVisible)}}>{isVisible?'Hide':'Show'}</button>
            <hr/>
            {isVisible && <Form/>}
            
        </div>
        
    )
}

export default App;