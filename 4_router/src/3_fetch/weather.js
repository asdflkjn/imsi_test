import { getFID } from 'web-vitals';
import '../App.css'
import { useEffect, useState } from 'react';

function App(){

    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [humidity, setHumidity] = useState('');

    // useEffect(() => {
    //     fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
    //         .then(result => result.json())
    //         .then(jsonresult => {
    //             // console.log(jsonresult)
    //             // console.log(jsonresult.weather[0].main)
    //             // console.log(jsonresult.main.temp)
    //             // 1-1 변수에 값을 저장/ state에 데이터 저장
    //             setTemp(Math.round(jsonresult.main.temp - 273.15)); // 켈빈을 섭씨로 변환
    //             setDesc(jsonresult.weather[0].description);
    //             setHumidity(jsonresult.main.humidity);
    //         }).catch(err => console.log(err));
    // }, [])}  

    const [isReady, setIsReady] = useState(false);

    //비동기 통신으로 만들기
    const getData = async () => {
        await fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
        .then(result => result.json())
        .then(jsonresult => {
            // console.log(jsonresult)
            // console.log(jsonresult.weather[0].main)
            // console.log(jsonresult.main.temp)
            // 1-1 변수에 값을 저장/ state에 데이터 저장
            setTemp(Math.round(jsonresult.main.temp - 273.15)); // 켈빈을 섭씨로 변환
            setDesc(jsonresult.weather[0].description);
            setHumidity(jsonresult.main.humidity);

            setIsReady(true); // 데이터가 준비되었음을 알림

        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getData()
    }, [])

    // return (
    //     <div className='App'>
    //         <h1>날씨 정보</h1>
    //         <div>
    //             <h4>온도: {temp}°C</h4>
    //             <h4>날씨: {desc}</h4>
    //             <h4>습도: {humidity}%</h4>
    //         </div>
    //     </div>
    // )

    if( isReady ){
            return (
        <div className='App'>
            <h1>날씨 정보</h1>
            <div>
                <h4>온도: {temp}°C</h4>
                <h4>날씨: {desc}</h4>
                <h4>습도: {humidity}%</h4>
            </div>
        </div>
    )
    }else{
        return (
            <div className='App-header'>
                로딩중...
            </div>
        )
    }
}

export default App;