
/*

***** hook
    - 함수형 컴포넌트에서 특정 기능 지원하기 위해 만들어진 함수
    - usexxxx() 로 시작하는 함수. 
    
    ` usdState() : 값을 변경하는 변수를 만들어주는 함수
    ` useEffect() : 생명주기 함수를 만들어주는 함수
    
    

    useMemo : 성능 개선 목적, 화면 속도를 위해서 

        - 성능 개선을 위해서 리턴 값을 캐싱(caching, 임시메모리)
        - 일반적인 경우 많이 사용하지 않고, 잘못하면 성능 저하 될 수 있음

    리턴변수 = useMemo(func, [변수])    
*/

import { useMemo, useState } from "react"

// 일반함수 ( 첫글자 소문자 )
const getCalc = (nums) => {
    console.log(`계산중.....: ${nums}`)
    if(nums.length === 0) return 0;

    // [1,2,3,4,5] => (1,2) => (앞의 결과값, 3) => (앞의 결과값, 4) => (앞의 결과값, 5)  
    const sum = nums.reduce((a,b)=>a+b)
    return sum;
} 

// 컴포넌트 ( 첫글자 대문자 )
const Average = () => { // 함수 만들자
    const [list, setList]   = useState([])
    const [num, setNum]   = useState('')
   
    const onChange = (evt) => { setNum(evt.target.value) } // 함수 만들자
   
    const onInsert = () => {
        // list.push(parseInt(num))
        // console.log(list) // 데이터가 잘 쌓이는지 확인
        // setList(list);
        // setList([...list]);
        setList([...list, parseInt(num)]);
        setNum('')
    }
//------------------------------------------------------------
    // const [num, setNum] = useState('')
    // const result = useMemo(() => getCalc(list), [list]);
    const result = useMemo( () => getCalc(list),[list] )

    return( // 화면 띄우자
        <div>
            <input type="text" value={num} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <hr/>
            <div>
                <ul>   
                    {
                        list.map((item,idx)=> {
                            return <li key={idx}>{item}</li>
                        })
                        // list.map((item,idx)=>{<li key={idx}>{item}</li>})
                    }
                </ul>
            </div>
            <hr/>
            <div>
                {/* 결과값 : {getCalc(list)} <br/>
                결과값 : {getCalc(list)} <br/>
                결과값 : {getCalc(list)} <br/>
                결과값 : {getCalc(list)} <br/> */}

                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
            </div>
        </div>
    )
}

export default Average;
