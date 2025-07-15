import { useState } from "react";



function ClassComponent(){
    
    let [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(Math.ceil(Math.random()*1000));
    };
    
    return(
        <div>
            <h3> 클래스 컴포넌트 </h3>
            <p> 숫자 : { number} </p>
            <hr/>
            <input type="button" value='확인1' onClick={handleClick}></input>
            <input 
                type="button" 
                value='확인1' 
                onClick={
                () => {
                    setNumber(Math.ceil(Math.random()*1000));
                }
            }></input>
        </div>
    )
}

export default ClassComponent;