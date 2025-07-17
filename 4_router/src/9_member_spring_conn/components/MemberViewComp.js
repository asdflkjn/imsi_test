import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용하여 페이지 이동 기능 추가

function MemberViewComp(){

    const {id} = useParams(); // URL 파라미터에서 seq 값을 가져옴

    const [Member, setMember] = useState({}); // 게시글 정보를 저장할 상태 변수

    useEffect(() => {
        axios.get('/api/member/' + id) // seq를 이용하여 게시글 상세 정보를 가져옴
        .then(result => setMember(result.data)) // 가져온 데이터를 상태 변수에 저장) 배열이 아니라서 전개연산자 안씀
    }, [id]); // seq가 변경될 때마다 useEffect가 실행됨  

    const navigate = useNavigate();

    const viewMember = () => {
        navigate('/');
    }

    const deleteMember = () => {
        axios.delete('/api/member/' + id)
        navigate('/');
    }

    const updateMember = () => {
        navigate(`/api/update-Member/${id}`); // seq를 URL 파라미터로 전달하여 수정 페이지로 이동
    }  

    return(
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 멤버 상황 </h3>
                <div className='card-body'>
                    <div className='row'>
                        <div className='alert alert-success'>아이디: {Member.id}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>비밀번호: {Member.password}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>이름: {Member.name}</div>
                    </div>

                    <button className='btn btn-success' onClick={updateMember} style={{marginLeft:'10px'}}>수정하기</button>
                    <button className='btn btn-primary' onClick={viewMember} style={{marginLeft:'10px'}}>멤버목록으로 이동</button>
                    <button className='btn btn-danger' onClick={deleteMember} style={{marginLeft:'10px'}}>삭제하기</button>
                </div>
            </div>
        </div>
    )

}

export default MemberViewComp;