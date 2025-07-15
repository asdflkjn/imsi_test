import { useState } from 'react';

import './temp.css';

const FancyBorder = props => {
    return (
        <div className='FancyBorder'>
            {props.children}
        </div>
    );
}

const TextPart = props => {
    return (
        <FancyBorder>
            <h1>{props.title}</h1>
            <hr/>
            <p>{props.message}</p>
            {/* 여기에 부모컴포넌트에서 받아서 자식 컴포넌트로 넘겨준 내용이 들어감 */}
            {props.children}
        </FancyBorder>
    );
}

const WelcomeDialog = props => {
    return (
        <TextPart title='환영합니다' message='오늘도 행운을' />
    );
}

const MorningDialog = props => {

    const[nickname, setNickname] = useState('');

    return (
        <TextPart title='좋은 아침' message='행복하세요!' >
            <input type='text' value={nickname} onChange={(evt)=>setNickname(evt.target.value)}/><br/>
            <button onClick={(evt)=>alert(`어서오세요 ${nickname}님`)}>입력</button>
        </TextPart>
    )
}

const App = () => {
    return (
        <div>
            <WelcomeDialog />
            <hr />
            <MorningDialog />
        </div>
    );
}  

export default App;