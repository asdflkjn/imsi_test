/*
    Http://localhost:3000/       <Home/>
    Http://localhost:3000/first  <First/>
    Http://localhost:3000/second <Second/>

    * route : url의 매핑에 따라서 다른 페이지를 구성하는 것, url에 맞게끔 매핑하는 것
    > npm install react-router-dom
*/

import '../App.css';
import Second from './pages/Second';
import First from './pages/First';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Third from './pages/Third';
import { useState } from 'react';
import Fourth from './pages/Fourth';

const App = () => {

    const [data, setData] = useState([
        {title:'영화0', img:'movie0.jpg'}
        , {title:'영화1', img:'movie1.jpg'}
        , {title:'영화2', img:'movie2.jpg'}
        , {title:'영화3', img:'movie3.jpg'}
        , {title:'영화4', img:'movie4.jpg'}
        , {title:'영화5', img:'movie5.jpg'}
    ]);

    return(
        <div className='App'>
            <p>공통영역</p>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/first' element={<First msg='리액트의 세계에 오신 것을 환영합니다'/>} />
                    <Route path='/second' element={<Second msg='리액트 즐기기'/>} />
                    <Route path='/third' element={<Third datas={data}/>} />
                    <Route path='/fourth/:idx/:name' element={<Fourth datas={data}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;