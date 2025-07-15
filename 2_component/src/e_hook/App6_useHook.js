

/*
    사용자 hook

*/

import { useEffect, useState } from "react"

function useCounter(initValue){

    const [count, setCount] = useState(initValue);

    const incrementCount = () => { setCount(count=> count + 1);}

    const decrementCount = () => { setCount(count=> Math.max(count-1, 0)); }

    return { count, incrementCount, decrementCount };
}

const MAX_CAPACITY = 5;


function Room(){
    const { count, incrementCount, decrementCount } = useCounter(0);

    const [isFull, setIsFull] = useState(false);

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`현재 수 확인: ${count} - ${isFull}`)
    }, [count]);

    return(
        <div>
            <p>{`총 ${count}명 입실`}</p>
            <button onClick={incrementCount}>입실</button>
            <button onClick={decrementCount}>퇴실</button>

            {isFull && <p style={{color:'red'}}>정원이 다 찼습니다</p>}
        </div>
    )
}

export default Room;