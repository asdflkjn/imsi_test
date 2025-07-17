// 복습

import { useState, useRef } from "react";

const App = () =>{

    const nextId = useRef(1);


    const [formData, setFormData] = useState({
        userid: ''
        , username: ''
    });

    const [data, setData] = useState({
        array: []
        , others: null
    });

    // 전개연산자를 써야 원하는 패턴이 나온다.
    const onChange = (evt) => {
        const { name, value } = evt.target;
        // console.log(name + ' : ' + value);
        // setFormData({...formData, [name]: value }); //  기존의 formData를 복사하고, name에 해당하는 값을 value로 변경
        
        // setFormData({[name]: value });
        // console.log(formData);
        
        setFormData({...formData, [name]: value }); 
        // console.log(formData);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        const info = {
            id: nextId.current
            , userid: formData.userid
            , username: formData.username
        }

        // 객체 처리를 해서 붙이기 작업
        const newData = {...data, array : data.array.concat(info)};
        setData(newData); // 기존의 애를 물려받아서 처리
        console.log(newData);

        // 화면 초기화. 화면값 변경
        setFormData({userid: '', username: ''}); // 폼 초기화
    
        nextId.current += 1;
    }

    // 삭제 처리. 같지 않은 애만 골라서 지정한다. 
    const onRemove = id => {
        setData({...data, array: data.array.filter(item => item.id !== id)})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="userid" 
                        value={formData.userid} placeholder="아이디"
                        onChange={onChange} /><br/>
                <input type="text" name="username" 
                        value={formData.username} placeholder="이름"
                        onChange={onChange} /><br/>
                <button type="submit">등록</button>
            </form>
            <hr/>
            <div>
                <ul>
                    {   // {} return 생략 못함
                        // () return 생략 가능
                        data.array.map((item,idx)=>(
                            <li key={item.id} onClick={()=>onRemove(item.id)}>{item.userid} :: {item.username}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;