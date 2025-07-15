
/*
    * 불변성 : 원본을 변경하지 않는 상태를 유지
        1> 전개연산자(...)를 사용하여 객체나 배열을 복사
        2> immer 라이브러리를 사용하여 불변성을 유지하면서 상태를 변경

    * immer 라이브러리 : 불변성을 유지하면서 상태를 변경할 수 있는 라이브러리
        
        [Current] > [Draft]      >     [Next]
        원본         변경후 원본과 비교    새로운 객체

        새로운 객체 = produce(변경대상객체, 불변성변경함수) 
*/

import { useState } from "react";
import produce from 'immer'; // immer 라이브러리에서 produce 함수 가져오기

const App = () => {

    const [todo, setTodo] = useState([
                                {item: '밥먹기', done: true}
                                , {item: '숨쉬기', done: false}
                                , {item: '멍때리기', done: false}
                                , {item: '코딩하기', done: true}   
                            ])

    const listData = () => {
        console.log(todo);
    }

    // 잘못된 수정
    const modifyData0 = () => {
        setTodo(()=> todo[2].item='공부하기' ) 

        // console.log('0'> todo);
    }

    // [1] ... 전개연산자 이용
    const modifyData1 = () => {
        const temp = todo.map((data, idx)=>(idx===2)?{...data, item:'공부하기'}:data ) // todo 배열을 복사. 이해할것
        setTodo(temp); // 새로운 배열로 상태 변경

        // console.log('1', temp);
        // console.log('1', todo);
    }

    // [2] immer 의 produce() 이용
    const modifyData2 = () => {

        const temp = produce(todo, (draft)=>{
            draft[2].item = '밥먹고 합시다'
        })

        setTodo(temp);
    }


    return(
        <div>
            <button onClick={listData}>확인</button>
            <br/>
            <button onClick={modifyData0}>수정0</button>
            <button onClick={modifyData1}>수정1</button>
            <button onClick={modifyData2}>수정2</button>
        </div>
    )
}
export default App;