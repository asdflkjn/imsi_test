import '../css/Movie.css'; 
import '../css/App.css'; 

const Movie = (props) => {

    return (
        <div>
            <div>{props.id} : {props.title} ({props.year})</div>
            <p>{props.summary}</p>
            <img src={props.poster} alt="props.title"/>
            <ul>
                {props.genres.map((genre, idx) => <li key={idx}> {genre} </li> )}
            </ul>
            <hr/>
        </div>
    )
}

export default Movie;


