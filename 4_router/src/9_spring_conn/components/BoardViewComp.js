import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용하여 페이지 이동 기능 추가

function BoardViewComp(){

    const {seq} = useParams(); // URL 파라미터에서 seq 값을 가져옴

    const [board, setBoard] = useState({}); // 게시글 정보를 저장할 상태 변수

    useEffect(() => {
        axios.get('/api/board/' + seq) // seq를 이용하여 게시글 상세 정보를 가져옴
        .then(result => setBoard(result.data)) // 가져온 데이터를 상태 변수에 저장) 배열이 아니라서 전개연산자 안씀
    }, [seq]); // seq가 변경될 때마다 useEffect가 실행됨  

    const navigate = useNavigate();

    const viewBoard = () => {
        navigate('/');
    }

    const deleteBoard = () => {
        axios.delete('/api/board/' + seq)
        navigate('/');
    }


    return(
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 게시글 보고 </h3>
                <div className='card-body'>
                    <div className='row'>
                        <div className='alert alert-success'>제목: {board.title}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>작성자: {board.writer}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>내용: {board.content}</div>
                    </div>

                    <button className='btn btn-success' style={{marginLeft:'10px'}}>수정하기</button>
                    <button className='btn btn-primary' onClick={viewBoard} style={{marginLeft:'10px'}}>글목록으로 이동</button>
                    <button className='btn btn-danger' onClick={deleteBoard} style={{marginLeft:'10px'}}>삭제하기</button>
                </div>
            </div>
        </div>
    )

}

export default BoardViewComp;