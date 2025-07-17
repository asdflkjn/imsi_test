import { useParams, Link } from "react-router-dom";

const MovieDetail = (props) => {
    const { idx } = useParams();
    const movie = props.movies[idx];

    return (
        <div style={{
            backgroundImage: `url(${movie.background_image_original})`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            padding: '20px',
            color: 'white'
        }}>
            <h1>{movie.title} ({movie.year})</h1>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p>{movie.genres.join(', ')}</p>
            <Link to='/'>← 목록으로</Link>
        </div>
    )
}    


export default MovieDetail;