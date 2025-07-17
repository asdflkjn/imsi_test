import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MemberInsertComp () {

    // 사용자 입력값을 저장할 변수 선언

    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 기능을 가져옴

    const cancelBtnHandler = function() {
        // alert("취소 버튼 클릭");
        navigate('/') //목록보기(첫번째 페이지)로 이동
    }    

    const saveBtnHandler = function(evt) {
        // alert(title + " " + writer + " " + content);
        evt.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

        // 왼쪽 이름은 백엔드의 memberVO 멤버변수와 동일하게 설정
        // 오른쪽 이름은 사용자 입력값을 저장하는 상태 변수
        
        let member = {
            id: id,
            password: password,
            content: content
        }
        axios.post('/api/member/write', null, {params:member}) // 백엔드에 POST 요청
    }

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> 아이디 </label>
                                    <input type="text" placeholder="id" name="id" 
                                            className="form-control" 
                                            value={title} onChange={(evt)=>{setTitle(evt.target.value)}}/>                             </div>
                                <div className = "form-group">
                                    <label> 비밀번호 </label>
                                    <input type="password" placeholder="password" name="password" 
                                            className="form-control" 
                                            value={writer} onChange={(evt)=>{setWriter(evt.target.value)}}/>     
                                </div>
                                <div className = "form-group">
                                    <label> 이름  </label>
                                    <textarea placeholder="name" name="name" 
                                            className="form-control" 
                                            value={content} onChange={(evt)=>{setContent(evt.target.value)}}/>     
                                </div>
                                <button className="btn btn-success"
                                        onClick={saveBtnHandler}>저장하기</button>
                                <button type="button" className="btn btn-danger" 
                                        onClick={cancelBtnHandler}
                                        style={{marginLeft:"10px"}}>취소하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MemberInsertComp;