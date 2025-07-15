
/*
    제어 컴포넌트 : 입력 값이 state나 props에 의해 제어되는 컴포넌트
                -> 리액트의 이벤트 핸들러를 이용하여 상태를 변경하고 화면의 값이 변경
                -> 권장, 상태값이 변경되면 바로 화면값이 변경됨

    비제어 컴포넌트: 입력 값이 state나 props에 의해 제어되지 않기 때문에 수정된 값이 상태값으로 변경 안됨
                -> HTML DOM에 직접 접근하여 값을 읽고 쓰는 방식

*/

import { useState, useRef } from 'react';

const App = () => {

    // HTML DOM에 직접 접근하기 위해 ref 사용
    const elemX = useRef(null);
    const elemY = useRef(null);

    const [result, setResult]  = useState(0);
    const add = () => {
        setResult(parseInt(elemX.current.value) + parseInt(elemY.current.value));
    }    

    return(
        <div>
            <h2>비제어 컴포넌트</h2>
            X값 : <input type='text' ref={elemX} /><br/> 
            <br/>

            Y값 : <input type=' text' ref={elemY} /><br/>
            <hr/>
            {/* 화면 갱신하기 위해 버튼 태그 */}
            <button onClick={add}>계산하기</button>
            결과 : {result}
        </div>
    )

}

export default App;