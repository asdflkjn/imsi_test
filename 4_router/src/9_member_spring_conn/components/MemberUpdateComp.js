
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MemberUpdateComp () {

    const {id} = useParams(); // URL 파라미터에서 id 값을 가져옴
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const navigate = useNavigate();

    // 기존 데이터 불러오기
    useEffect(() => {
        axios.get('/api/member/' + id)
            .then(result => {
                const member = result.data;
                setUserId(member.id);
                setPassword(member.password);
                setName(member.name);
            })
    }, [id]);

    const cancelBtnHandler = function() {
        navigate('/'); // 목록보기로 이동
    }    

    const updateBtnHandler = function(evt) {
        evt.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

        let member = {
            id: id,
            password: password,
            name: name
        }
        
        axios.put('/api/member/' + id, null, {params:member}) // 백엔드에 PUT 요청
            .then(result => {
                navigate('/'); // 수정 후 목록으로 이동
            });
    }

     return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3">
                        <h3 className="text-center"> 수정 작업을 해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> 아이디 </label>
                                    <input type="text" placeholder="id" name="id" 
                                            className="form-control"
                                            value={userId} onChange={(evt)=>{setUserId(evt.target.value)}}/>
                                </div>
                                <div className = "form-group">
                                    <label> 비밀번호 </label>
                                    <input type="password" placeholder="password" name="password" 
                                            className="form-control"
                                            value={password} onChange={(evt)=>{setPassword(evt.target.value)}}/>
                                </div>
                                <div className = "form-group">
                                    <label> 이름 </label>
                                    <input type="text" placeholder="name" name="name" 
                                            className="form-control"
                                            value={name} onChange={(evt)=>{setName(evt.target.value)}}/>
                                </div>
                                <button type="button" className="btn btn-success" onClick={updateBtnHandler}>수정하기</button> 
                                <button type="button" className="btn btn-danger" onClick={cancelBtnHandler} style={{marginLeft:"10px"}}>취소하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MemberUpdateComp;