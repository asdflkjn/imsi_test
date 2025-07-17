/*
    fetch: 
    axios: 
*/
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {


    const [data, setData] = useState({})

    useEffect(() => {

        // get함수, post함수에 따라서 갔다올 수 있게 해주는 함수: axios
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&appid=1db47184ebbc18af53fd996be840d270')
            // .then (result => console.log(result))
            .then (result => setData(result.data))
    }, [])

    return(
        <div>
            {/* 온도, 날씨, 습도를 화면에 출력 */}
            <h1>날씨</h1>
            <h3>온도: {data.main && Math.round(data.main.temp - 273.15)}ºC</h3>
            <h3>날씨: {data.weather && data.weather[0].description}</h3>
            <h3>습도: {data.main && data.main.humidity}%</h3>
        </div>
    )

}

export default App;