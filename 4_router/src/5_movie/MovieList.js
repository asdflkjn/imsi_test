import Movie from './component/Movie';
import axios from 'axios';
import { useState, useEffect, use } from 'react';

const MovieList = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        await axios.get('https://yts.mx/api/v2/list_movies.json')
            .then(result => {
                console.log(result.data.data.movies);
                
                const movies_temp = result.data.data.movies;

                setMovies(movies_temp);
                // setMovies(movies_temp);

                setIsLoading(false); // 데이터를 받아오면 완료
            })
    }

    useEffect(() => {
        
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 2000); // 2초 후에 로딩 상태를 false로 변경

        getMovies();

    }, []);

    return (
        <div>{ isLoading ? <h1>로딩중...</h1> : 
        // <h1>완료</h1> 
            // movies.map( (movie) => { return <Movie/>} )
            movies.map( movie => <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    poster={movie.small_cover_image}
                                    genres={movie.genres}
                                /> )
        }</div>
    );
}


export default MovieList;