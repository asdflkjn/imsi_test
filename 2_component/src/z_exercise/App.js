


import { useEffect, useState } from "react"




function Icount(initValue){
    const [count, setCount] = useState(initValue);
    const incrementCount = () => setCount(c => c + 1);
    return { count, incrementCount, setCount };
}

// MyCount 컴포넌트 (개별 카운터)
function MyCount({ label, initValue = 0}){
    const { count, incrementCount, setCount } = Icount(initValue);
    const decrementCount = () => setCount(c => Math.max(c - 1, 0));


    useEffect(()=>{
        console.log(`${label} 현재 수 확인: ${count}`)
    }, [count, label]);

    return(
        <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
            {label && (
                <div style={{ width: 60, border: '1px solid #aaa', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9' }}>
                    {label}
                </div>
            )}
            <button 
                onClick={decrementCount}
                style={{ border: '2px solid black', width: 40, height: 40, fontSize: 20, background: 'white', cursor: 'pointer' }}
            >▼</button>
            <div 
                style={{ border: '2px solid black', width: 80, height: 40, fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'right' }}
            >{count}</div>
            <button 
                onClick={incrementCount}
                style={{ border: '2px solid black', width: 40, height: 40, fontSize: 20, background: 'white', cursor: 'pointer' }}
            >▲</button>
        </div>
    )

}


// MyMenu 컴포넌트 (카운터 목록/메뉴)
function MyMenu() {
    const items = ["사과", "배", "귤"];
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span>[ 연습 -1 ]</span>
            <br />
            <MyCount label={null} initValue={0} />
            <br />
            <span>[ 연습 -2 ]</span>
            <br />
            <div>
                {items.map(item => (
                    <MyCount key={item} label={item} initValue={3} minValue={0} />
                ))}
            </div>
        </div>
    );
}

export default MyMenu;



