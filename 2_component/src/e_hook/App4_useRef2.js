
/*

***** hook
    - 함수형 컴포넌트에서 특정 기능 지원하기 위해 만들어진 함수
    - usexxxx() 로 시작하는 함수. 
    
    ` usdState() : 값을 변경하는 변수를 만들어주는 함수
    ` useEffect() : 생명주기 함수를 만들어주는 함수

    `useMemo : 성능 개선 목적, 화면 속도를 위해서 

        - 성능 개선을 위해서 리턴 값을 캐싱(caching, 임시메모리)
        - 일반적인 경우 많이 사용하지 않고, 잘못하면 성능 저하 될 수 있음

    리턴변수 = useMemo(func, [변수])    


    ` useCallback 
        - 주로 렌더링 성능을 최적화해야 하는 상황에 사용 -> 잘못 사용하면 성능 저하
        - useMemo()와 유사

            useMemo() -> 캐시의 대상이 함수의 리턴값
            useCallback() -> 캐시의 대상이 컴포넌트 내부의 함수 자체
                -> 자주 사용하는 함수들을 이 안에 넣어서 성능 향상을 꾀할 수 있음


    useRef() : 함수형 컴포넌트에서 특정 DOM을 참조하기 위해서 사용하는 훅

    [1] useRef()로 리턴받은 객체는 컴포넌트의 모든 생명주기 동안 유지됨
    - 화면의 값을 변경하지 않을 수 있음 (나머지는 렌더링이 나오지만, 여기에서는 등장 안함)
    - ref 객체가 변경되었다 하더라도 렌더링 되지는 않음.
    - 그러나 useState()의 변수의 렌더링이 일어나면 화면에 값이 변경됨.

    [2] 브라우저의 DOM 요소에 직접 접근 가능
                    

*/

import { use, useCallback, useMemo, useState, useRef } from "react"

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
   
    const inputEL = useRef(null); // useRef로 input 태그를 참조


    // const onChange = (evt) => { setNum(evt.target.value) } // 함수 만들자
   const onChange = useCallback( (evt) => {
        setNum(evt.target.value) 
    },[]) // 빈 리스트: 맨 처음에 단 한번만 실행

   const onInsert = useCallback( () => {
        setList([...list, parseInt(num)]);
        setNum('')

        inputEL.current.focus(); // input 태그에 focus를 주기

    },[num, list]) 

    // const onInsert = () => {
    //     // list.push(parseInt(num))
    //     // console.log(list) // 데이터가 잘 쌓이는지 확인
    //     // setList(list);
    //     // setList([...list]);
    //     setList([...list, parseInt(num)]);
    //     setNum('')
    // }
//------------------------------------------------------------
    // const [num, setNum] = useState('')
    // const result = useMemo(() => getCalc(list), [list]);
    const result = useMemo( () => getCalc(list),[list] ) // 이 return 값을 캐싱해서 빠르게

    return( // 화면 띄우자
        <div>
            <input type="text" value={num} onChange={onChange} ref={inputEL} />
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
