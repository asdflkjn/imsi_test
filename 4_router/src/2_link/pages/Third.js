import { Link } from "react-router-dom";

const Third = (props) => {
// {} 썼다면 반드시 return이 있어야 함
    let list = props.datas.map((data, idx)=>{
        return(
        <div key={idx}>
            {/* 진짜 제목 */}
            <h3>{data.title}</h3><br/>
            {/* 클릭했을 때 페이지 넘기는 방법: a태그 안써 */}
            <h5><Link to={`/fourth/${idx}/${data.title}`}>{data.title}</Link></h5><br/>
            <img src={`imgs/${data.img}`}/>
        </div>)
    })
    // console.log(list);

    return(
        <div>
            <p>여기는 Third 페이지입니다</p>
            <hr/>
            {list}
        </div>
    )
}

export default Third;