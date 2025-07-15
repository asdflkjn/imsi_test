import { useState } from 'react';

const App = () => {
    const [won, setWon] = useState('');
    const [dollar, setDollar] = useState('');

    const handleWon = (e) => {
        const value = e.target.value;
        setWon(value);
        setDollar(value / 1382.86); // 간단한 환율
    }

    const handleDollar = (e) => {
        const value = e.target.value;
        setDollar(value);
        setWon(value * 1382.86);
    }

    return(
        <div>
            <h3 style={{padding:'20px'}}>[ 환율 계산기 ]</h3>
            
            <div style={{border: '2px solid gray', padding: '20px', margin: '20px'}}>원화 금액을 입력하세요<br/>
                <input type='number' value={won} onChange={handleWon} /><br/>
            </div>
            <div style={{border: '2px solid gray', padding:'20px', margin: '20px'}}>달러 금액을 입력하세요<br/>
                <input type='number' value={dollar} onChange={handleDollar} />
            </div>
            
        </div>
    )
}

export default App;