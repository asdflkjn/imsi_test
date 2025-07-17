import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용하여 페이지 이동 기능 추가

function MemberListComp () {
 
    const [Members, setMembers] = useState([]); // 게시판 목록을 저장할 상태 변수


    // 렌더링 됐을 때 단 한 번만 실행되는 useEffect
    useEffect(() => {
        axios.get('/api/member') // 백엔드 단, 80800 포트로 요청을 보냄 (808톰캣서버)
            .then(result => {
                // console.log(result.data) //배열값이 잘 나옴.
                const Members = result.data; //temp로 변수를 주어도 됨
                setMembers([...Members]); // Members 상태 변수에 데이터 저장 (스프레드 연산자 사용)
            })
    }, []);

    const navigate = useNavigate();

    const createMember = () => {
        navigate('/api/insert-Member');
    }

    const readMember = (evt, id) => {
        evt.preventDefault(); // 기본 동작 방지 (링크 클릭 시 페이지 이동 방 / a태그는 현재 페이지를 새로고침함
        navigate(`/api/view-Member/${id}`); // id를 URL 파라미터로 전달하여 게시글 상세보기 페이지로 이동
        // navigate('/api/view-Member' + id)
    }

    return (
        <div>
            <h2 className="text-center">Members List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>비밀번호</th>
                            <th>이름</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        Members.map( Member =>
                            <tr key={Member.id}>
                                <td>{Member.id}</td>
                                <td>
                                    <a onClick={(evt)=>{readMember(evt, Member.id)}}>{Member.password}</a>
                                </td>
                                <td>{Member.name}</td> 
                            </tr>    
                        )}
                    </tbody>
                </table>
            </div>      

            <div className="row">
                <button className="btn btn-primary" onClick={createMember}> 멤버 추가</button>
            </div>   

        </div>
    );

}

export default MemberListComp;
