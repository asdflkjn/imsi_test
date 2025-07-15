
import React, { useState } from 'react';

function App(){
    
    let [count, setCount] = useState(100);


    const sync_increment = () => { 
        setCount(count + 1); // 1개씩 올라감
        setCount(count + 1);
        setCount(count + 1);
    }
    
    const async_increment = () => {
        setCount((count) => count + 1); // 3개씩 올라감
        setCount((count) => count + 1);
        setCount((count) => count + 1);

    }
    
    const async_increment_temp = () => {
        setCount(()=>count + 1); // 1개씩 올라감
        setCount(()=>count + 1);
        setCount(()=>count + 1);
    }

    return(
        <div>
            <div> {count} </div>
            <button onClick={sync_increment}>동기식</button>
            <button onClick={async_increment}>비동기식(리액트권장)</button>
            <button onClick={async_increment_temp}>잘못된 방식</button>
        </div>
    )

}

export default App;