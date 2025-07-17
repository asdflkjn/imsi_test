import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Practice = () => {
    const [repos, setRepos] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // 1. GitHub 리액트 검색
        axios.get('https://api.github.com/search/repositories?q=react')
            .then(response => setRepos(response.data.items.slice(0, 5)));

        // 2. 영화정보 사이트
        axios.get('http://yts-proxy.now.sh/list_movies.json')
            .then(response => setMovies(response.data.data.movies.slice(0, 8)));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>[ axios를 이용 ]</h1>

            <h2>1. GitHub에서 리액트를 검색하는 사이트에 접속하여 페이지명과 html 경로를 추출</h2>
            <p>https://api.github.com/search/repositories?q=react</p>
            <p>full_name 과 html_url 값을 추출하여 출력</p>
            
            {repos.map((repo, index) => (
                <div key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
                    <p>{repo.full_name}</p>
                    <p>{repo.html_url}</p>
                </div>
            ))}

            <hr />

            <h2>2. 영화정보 사이트에 접속하여 필요한 항목 추출</h2>
            <p>http://yts-proxy.now.sh/list_movies.json</p>
            <p>영화번호 / 영화제목 추출</p>
            <p>이미지 출력</p>

            {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}> */}
            <div>
                {movies.map((movie) => (
                    // <div key={movie.id} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                    <div key={movie.id}>
                        <p>영화번호: {movie.id}</p>
                        <p>영화제목: {movie.title}</p>
                        <img src={movie.medium_cover_image}/> <hr/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Practice;
