
import { useState, useRef } from "react";
import produce from 'immer';

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

    const onChange = (evt) => {
        const { name, value } = evt.target;
        
        // setFormData({...formData, [name]: value }); 
        setFormData(produce(formData, draft => {
            draft[name] = value; // Immer를 사용하여 불변성을 유지하면서 상태 업데이트. name 을 찾아서 비교한다.
        }));
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        const info = {
            id: nextId.current
            , userid: formData.userid
            , username: formData.username
        }

        // setData( {...data, array : data.array.concat(info)} ) 
        // console.log(data);
        setData(produce(data, draft => {
            draft.array.push(info); // Immer를 사용하여 불변성을 유지하면서 상태 업데이트
        }));
        nextId.current += 1;

        setFormData({userid: '', username: ''}); 
    
    }

    const onRemove = id => {
        // setData({...data, array: data.array.filter(item => item.id !== id)})
        setData(produce(data, draft => { 
            draft.array.splice(draft.array.findIndex(item => item.id === id), 1); // 같은 인덱스 갖고 있는 애 찾아서 그 중에 하나 
        }))
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
                    {   
                        data.array.map((item,idx)=>(
                            <li key={item.id} onClick={() => onRemove(item.id)}>{item.userid} :: {item.username}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;