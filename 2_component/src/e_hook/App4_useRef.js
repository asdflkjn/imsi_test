
/*
    useRef() : 함수형 컴포넌트에서 특정 DOM을 참조하기 위해서 사용하는 훅
    
        [1] useRef()로 리턴받은 객체는 컴포넌트의 모든 생명주기 동안 유지됨
        - 화면의 값을 변경하지 않을 수 있음 (나머지는 렌더링이 나오지만, 여기에서는 등장 안함)
        - ref 객체가 변경되었다 하더라도 렌더링 되지는 않음.
        - 그러나 useState()의 변수의 렌더링이 일어나면 화면에 값이 변경됨.

        [2] 브라우저의 DOM 요소에 직접 접근 가능
        

*/
import { useRef, useState } from "react";

        

const App = () => {
    // useState()
    const [ realname, setRealname ] = useState('홍길동') //useState: 값 변경하려고 사용
    // useRef()
    const refNickname = useRef('산적')

    return(
        <div>
            <h2>데이터 상태</h2>
            <div>
                <span> 본명: {realname}</span>
                <input type="text" onChange={ (evt)=>setRealname(evt.target.value) }></input>
            </div>
            <div>
                <span> 별명: {refNickname.current}</span>
                <input type="text" onChange={ (evt)=>{refNickname.current = evt.target.value} }></input>
            </div>    
        </div>
    )

}

export default App;