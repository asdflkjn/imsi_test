import { useState, useEffect } from "react"


function Icount(initValue){
    const [count, setCount] = useState(initValue);
    const upCount = ()=> setCount( count => count +1);
    return {count, upCount, setCount};
}

function MyCount(name, initValue=0 ){
    const {count, upCount, setCount} = Icount(initValue);
    const downCount = () => { setCount( c=> Math.max(c-1, 0) ) }

    useEffect(
        ()=>{
            console.log(`${name} 현재 수 확인: ${count}`)
        }, [name, count] )

        return(
            <div>
                {name}
                <button onClick={downCount}>☆</button>
                <div>{count}</div>
                <button onClick={upCount}>★</button>
            </div>
        )
}

function MyMenu(){
    const fruits = ['사과', '배', '수박'];

    return(
        <div>
            <MyCount name={null} initValue={0}></MyCount>
            <div>
                {
                    fruits.map( fruit => (
                        <MyCount key={fruit} name={fruit} initValue={3} minValue={0}></MyCount>
                    ))
                }
            </div>
        </div>
    )
}

export default MyMenu;