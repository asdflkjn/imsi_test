import '../css/Movie.css'; 
import '../css/App.css'; 

// 화면에 출력하는 컴포넌트 만들기
const Movie = (props) => {

    // 화면에 출력하는 뼈다귀 만들기
    return (
        <div>
            <div>{props.id} : {props.title} ({props.year})</div>
            <p>{props.summary}</p>
            <img src={props.poster} alt="props.title"/>
            {/* genres를 받아서 목록에 출력 */}
            <ul>
                {props.genres.map((genre, idx) => <li key={idx}> {genre} </li> )}
            </ul>
            <hr/>
        </div>
    )
}

export default Movie;


