
/*
    npm install axios             - API를 호출하기 위한 라이브러리
    npm install react-router-dom  - 페이지 전환을 위한 라이브러리
    npm install bootstrap react-bootstrap         - UI 라이브러리

*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import MemberListComp from "./components/MemberListComp";
import MemberInsertComp from "./components/MemberInsertComp";
import MemberUpdateComp from "./components/MemberUpdateComp";
import MemberViewComp from "./components/MemberViewComp";
import HeaderComp from "./components/HeaderComp";

const App = () => {

    return(
        <div>
            <BrowserRouter>
            <HeaderComp/> 
                <div className="container">
                    <Routes>
                        {/* 처음 시작하는 경로부터 목록 보기 나왔으면 해/ url이 들어오면 해당하는 컴포넌트들이 떴으면 해 */}
                        <Route path="/" element={<MemberListComp/>} />
                        <Route path="/api/Member" element={<MemberListComp/>} />
                        <Route path="/api/insert-Member" element={<MemberInsertComp/>} />
                        <Route path="/api/view-Member/:id" element={<MemberViewComp/>} />
                        <Route path="/api/update-Member/:id" element={<MemberUpdateComp/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )

}

export default App;