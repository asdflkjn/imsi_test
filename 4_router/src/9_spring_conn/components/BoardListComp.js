import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용하여 페이지 이동 기능 추가

function BoardListComp () {
 
    const [boards, setBoards] = useState([]); // 게시판 목록을 저장할 상태 변수


    // 렌더링 됐을 때 단 한 번만 실행되는 useEffect
    useEffect(() => {
        axios.get('/api/board') // 백엔드 단, 80800 포트로 요청을 보냄 (808톰캣서버)
            .then(result => {
                // console.log(result.data) //배열값이 잘 나옴.
                const boards = result.data; //temp로 변수를 주어도 됨
                setBoards([...boards]); // boards 상태 변수에 데이터 저장 (스프레드 연산자 사용)
            })
    }, []);

    const navigate = useNavigate();

    const createBoard = () => {
        navigate('/api/insert-board');
    }

    const readBoard = (evt, seq) => {
        evt.preventDefault(); // 기본 동작 방지 (링크 클릭 시 페이지 이동 방 / a태그는 현재 페이지를 새로고침함
        navigate(`/api/view-board/${seq}`); // seq를 URL 파라미터로 전달하여 게시글 상세보기 페이지로 이동
        // navigate('/api/view-board' + seq)
    }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀 </th>
                            <th>작성자 </th>
                            <th>작성일 </th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        boards.map( board =>
                            <tr key={board.seq}>
                                <td>{board.seq}</td>
                                <td>
                                    <a onClick={(evt)=>{readBoard(evt, board.seq)}}>{board.title}</a>
                                </td>
                                <td>{board.writer}</td>
                                <td>{board.regdate}</td>
                                <td>{board.cnt}</td>      
                            </tr>    
                        )}
                    </tbody>
                </table>
            </div>      

            <div className="row">
                <button className="btn btn-primary" onClick={createBoard}> 글 작성</button>
            </div>   

        </div>
    );

}

export default BoardListComp;
