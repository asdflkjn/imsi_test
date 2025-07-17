import React, { useState, useEffect } from 'react';
import '../App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// 받아오는 애가 없어서 props 지정 안해도 됨
const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        await axios.get('https://yts.mx/api/v2/list_movies.json')
            .then(result => {
                const movies_temp = result.data.data.movies;
                setMovies(movies_temp);
                setIsLoading(false); // 데이터를 받아오면 완료
            })
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='App'>
            { isLoading ? 
                <div className='App-header'>로딩중</div> :
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/'             element={<MovieList   movies={movies}/>}></Route>
                            <Route path='/detail/:idx'  element={<MovieDetail movies={movies}/>}></Route>
                        </Routes>
                    </BrowserRouter>        
                </div>
            }
        </div>
    )
}

export default App;