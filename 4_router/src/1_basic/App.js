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
import { Link } from 'react-router-dom';

const App = () => {

    return(
        <div className='App'>
            <p>공통영역</p>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/first' element={<First />} />
                    <Route path='/second' element={<Second />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;