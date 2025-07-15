
/*
    렌더링 성능을 최적화 하기 위해
        - useMemo( func, [변수] )
        - useCallback( func, [변수] )

*/

import '../App.css';
import { useState, useRef, useCallback } from 'react';
import produce from 'immer';

const App = () => {

    const nextId = useRef(1); // 다음에 추가될 항목의 id를 관리하는 ref, 초기치 1 줄거야

    const [formdata, setformdata] = useState( {
                        userid:''
                        , username:''
                        , email:''
                        } )

    const [data, setData] = useState({
        array: [],
        other: null
    })

    // const onInputChange = (evt) => {
    //     const {name, value} = evt.target;
    //     // console.log(`${name} : ${value}`);
    //     setformdata({...formdata, [name]: value});
    // }
     const onInputChange = useCallback( (evt) => {
        const {name, value} = evt.target;
        setformdata({...formdata, [name]: value});
    }, [formdata, data]); // formdata가 변경될 때만 실행되도록


    const onSubmit = useCallback( (evt) => {
        // alert('ok');
        evt.preventDefault(); // submit 이벤트가 발생했을 때 페이지가 새로고침 되는 것을 막기, 고유의 이벤트를 막는다.
        // 막아놓고 나서 그 다음 작업 처리
        
        const info = {
            id : nextId.current
            , userid : formdata.userid
            , username : formdata.username
            , email : formdata.email
        }
        
        // array에 새 항목 추가
        setData({...data, array : data.array.concat(info)});
        
        // 폼 데이터 초기화
        setformdata({userid:'', username:'', email:''}); // 입력창 초기화

        console.log(data);

        nextId.current += 1; // 다음에 추가될 항목의 id를 증가시킴
    }, [formdata, data] ); 

    const onRemove = useCallback( (id) => {
        // 이 부분은 오늘은 확인만 합시다
        setData(produce(data, draft => {  //draft는 변수명, 이름
            draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        }))
    }, [data])   // 관련된 애가 data이기 때문에 

    return(
        <div className="App">
            <form onSubmit={onSubmit}>
                <input name="userid" placeholder="아이디" onChange={onInputChange} value={formdata.userid}></input>
                <input name="username" placeholder="이름" onChange={onInputChange} value={formdata.username}></input>
                <input name="email" placeholder="이메일" onChange={onInputChange} value={formdata.email}></input>
                <button type="submit">등록</button>
            </form>

            <hr/>
            <ul>
                {
                    data.array.map((info) => {  //info는 그냥 인자를 받는 파라미터 변수명
                        return(
                            <li key={info.id} onClick={() => onRemove(info.id)}>
                                <span>{info.userid}:{info.username}:{info.email}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>    
    )
}

export default App; 