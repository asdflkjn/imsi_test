// React에서 상태관리(useState)와 생명주기(useEffect)를 사용하기 위해 가져오기
import { useState, useEffect } from 'react';
// 서버와 통신하기 위한 axios 라이브러리 가져오기
import axios from 'axios';

// Practice라는 이름의 함수형 컴포넌트 만들기
const Practice = () => {
    // repos: GitHub 저장소 목록을 저장할 변수 (처음엔 빈 배열)
    // setRepos: repos 변수의 값을 바꿀 때 사용하는 함수
    const [repos, setRepos] = useState([]);
    
    // movies: 영화 목록을 저장할 변수 (처음엔 빈 배열)
    // setMovies: movies 변수의 값을 바꿀 때 사용하는 함수
    const [movies, setMovies] = useState([]);

    // useEffect: 컴포넌트가 화면에 처음 나타날 때 한 번만 실행되는 함수
    // []가 있으면 딱 한 번만 실행됨
    useEffect(() => {
        // GitHub API에 요청 보내기 (React 관련 저장소 검색)
        axios.get('https://api.github.com/search/repositories?q=react')
            .then(response => {
                // 서버에서 응답이 오면 실행되는 코드
                // response.data.items: GitHub에서 보내준 저장소 목록
                // slice(0,5): 처음부터 5개까지만 가져오기
                setRepos(response.data.items.slice(0, 5))
            })

        // 영화 정보 API에 요청 보내기
        axios.get('http://yts-proxy.now.sh/list_movies.json')
            .then(response => {
                // 서버에서 응답이 오면 실행되는 코드
                // response.data.data.movies: 영화 API에서 보내준 영화 목록
                // slice(0,8): 처음부터 8개까지만 가져오기
                setMovies(response.data.data.movies.slice(0, 8))
            })
    }, []) // 빈 배열 [] = 컴포넌트가 처음 로드될 때만 실행

    // 화면에 보여줄 내용을 return으로 반환
    return (
        <div>
            {/* 제목 */}
            <h1> axios를 이용</h1>
            
            {/* GitHub 섹션 설명 */}
            <p>1. 깃허브에서 리액트를 검색하는 사이트에 접속하여 페이지명과 html 경로를 추출</p>
            <p>full_name과 html_url 값을 추출하여 출력</p>
            
            {/* GitHub 저장소 목록을 화면에 출력 */}
            {
                // repos 배열의 각 요소(repo)를 하나씩 처리
                repos.map(
                    (repo, index) => (
                        // 각 저장소 정보를 담는 박스
                        // key={index}: React가 각 요소를 구별하기 위해 필요
                        <div key={index}>
                            {/* 저장소의 전체 이름 (예: facebook/react) */}
                            {repo.full_name}
                            {/* 저장소의 GitHub 주소 */}
                            {repo.html_url}
                        </div>
                    )
                )
            }
            
            {/* 구분선 */}
            <hr />
            
            {/* 영화 섹션 제목 */}
            <h2>2. 영화정보 사이트에 접속하여 필요한 항목 추출: 영화번호/영화제목 추출, 이미지 출력</h2>
            
            {/* 영화 목록을 담는 컨테이너 */}
            <div>
                {/* movies 배열의 각 영화(movie)를 하나씩 처리 */}
                {movies.map(movie => (
                    // 각 영화 정보를 담는 박스
                    // key={movie.id}: 각 영화의 고유 번호로 구별
                    <div key={movie.id}>
                        {/* 영화의 고유 번호 */}
                        <p>영화번호: {movie.id}</p>
                        {/* 영화 제목 */}
                        <p>영화제목: {movie.title}</p>
                        {/* 영화 포스터 이미지 
                            src: 이미지 주소
                            alt: 이미지가 안 보일 때 대신 보여줄 텍스트 */}
                        <img src={movie.medium_cover_image} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

// 이 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내기
export default Practice;