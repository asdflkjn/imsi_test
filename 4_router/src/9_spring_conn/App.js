
/*
    npm install axios             - API를 호출하기 위한 라이브러리
    npm install react-router-dom  - 페이지 전환을 위한 라이브러리
    npm install bootstrap react-bootstrap         - UI 라이브러리

*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import BoardListComp from "./components/BoardListComp";
import BoardInsertComp from "./components/BoardInsertComp";
import BoardUpdateComp from "./components/BoardUpdateComp";
import BoardViewComp from "./components/BoardViewComp";
import HeaderComp from "./components/HeaderComp";

const App = () => {

    return(
        <div>
            <BrowserRouter>
            <HeaderComp/> 
                <div className="container">
                    <Routes>
                        {/* 처음 시작하는 경로부터 목록 보기 나왔으면 해/ url이 들어오면 해당하는 컴포넌트들이 떴으면 해 */}
                        <Route path="/" element={<BoardListComp/>} />
                        <Route path="/api/board" element={<BoardListComp/>} />
                        <Route path="/api/insert-board" element={<BoardInsertComp/>} />
                        <Route path="/api/view-board/:seq" element={<BoardViewComp/>} />
                        <Route path="/api/update-board/:seq" element={<BoardUpdateComp/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )

}

export default App;