import { useState } from "react";

function App(){

    let [title, setTitle] = useState(['맛집1', '맛집2', '맛집3']) // 괄호 안에는 초기값 - 배열로 초기화한 것

    function setItemContent(idx){
        let newItem = ['호남식당', '학식', '짬뽕집'];
        // console.log(newItem)
        title[idx] = newItem[idx];
        // console.log(title)
        // setTitle(title);     //렌더링 안됨   
        setTitle([...title]);   //렌더링 됨     -전개연산자: React의 상태는 "값"이 아니라 "참조(객체의 주소)"가 바뀌어야 변경으로 인식합니다. 그래서 전개연산자를 써서 새로운 배열을 만들어야 렌더링
    }

    return(
        <div>
            <div>{title}</div>
            <button onClick={()=>{
                // 값 변경할 때는 set함수를 불러서 변경하라
                setTitle(['변경1','변경2','변경3'])
            }}>변경</button>
            <hr/>
            <ul>
                {
                    title.map((item, idx)=>{
                        return(<li key={idx} onClick={()=>{setItemContent(idx);}}>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default App;