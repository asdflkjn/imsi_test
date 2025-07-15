
import { useState } from "react";
import produce from 'immer'; // immer 라이브러리에서 produce 함수 가져오기

const App = () => {

    let[studentMng, setStudentMng] = useState([
        {dept:'컴공', title:'자바', score:3}
        , {dept:'소공', title:'파이썬', score:4}
        , {dept:'소공', title:'리액트', score:2}
        , {dept:'컴공', title:'디비', score:5}
    ])

    // 목록 화면 출력
    const handleList = () => {
        console.log(studentMng);
    }
    
    // 전개연산자 방식으로 세번째 과목인 리액트를 도커로 변경
    const handleSpread = () => {
        const abc = studentMng.map( (data,idx)=> (idx===2)?{...data, title:'도커'}:data )
        setStudentMng(abc); 
    }

    // immer 방식으로 두번째 과목인 파이썬을 ES6으로 변경
    const handleImmer = () => {
        const newstudentMng = produce(studentMng, (draft)=>{
            draft[1].title = 'ES6';
        })
        setStudentMng(newstudentMng);
    }    

    return(
        <div>
            <button onClick={handleSpread}>전개연산자 방식</button><br/>
            <button onClick={handleImmer}>immer 방식</button><br/>
            <hr/>
            <button onClick={handleList}>확인</button>
        </div>
    )
}

export default App;