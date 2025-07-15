
import { useEffect, useState } from 'react'
import '../App.css'

const Clock = () => {
    const [nowTime, setNowTime] = useState(new Date().toString() );

    useEffect( ()=>{
        
        const handle = setInterval(()=>{        // setInterval: 단 한 번 불리는 함수
            console.log('짹깍\n')
            setNowTime( new Date().toString() )
        },1000)  // 1초마다 불릴 수 있게

        return()=>{ clearInterval(handle) }     // 눌려 버튼 눌러서 숨기면 짹깍이 멈추도록
    },[] )

    return(
        <div className='App-link'>
            <h4>{nowTime}</h4>
        </div>
    )

}


const App = () => {

    const [isClockVisible, setIsClockVisible] = useState(false)

    return(
        <div className='App-header'>
            <h2>시계놀이</h2>
            <button onClick={()=>{ setIsClockVisible(!isClockVisible)}}>눌려</button>
            <hr/>
            { isClockVisible? <Clock/>: ""}
        </div>
    )
}

export default App;