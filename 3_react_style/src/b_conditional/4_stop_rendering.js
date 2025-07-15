

/* 
    컴포넌트의 렌더링 막기(화면에 보이지 않게 하기)
        => return null
*/

import { useState } from 'react';
import '../App.css';

function Banner(props){
    if(!props.show) return null; // show가 false일 때 렌더링하지 않음
    return <div className="App-header">광고</div>;
}

function MainPage(props){

    const [show, setShow] = useState(false); 

    return (
        <div>
            <button onClick={()=>setShow( show => !show )}>{show? '감추기':'보이기'}</button>
            <hr/>
            <Banner show={show} />
        </div>
    )
}


export default MainPage;