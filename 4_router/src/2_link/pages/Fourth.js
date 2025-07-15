/*
    리액트 라우터가 제공하는 훅
    `useMatch()
    `useParams()
    `useLocation()
    `useSearchParams()
    `useNavigate()
*/
import { useParams } from 'react-router-dom';

const Fourth = (props) => {

    let {idx, name} = useParams();

    return (
        <div>
            <p>여기는 영화 상세보기 페이지입니다.</p>
            <hr/>
            <p>
                <span> {idx} </span> : {name}
            </p>
            <img src={`/imgs/${props.datas[idx].img}`}/>
        </div>
    );
}

export default Fourth;

// single page application 하나의 페이지에서 갈아끼운다.