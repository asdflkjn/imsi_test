import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './1_basic/App'; // Adjusted import to point to the basic app
// import App from './2_link/App'; // Adjusted import to point to the basic app
// import App from './0_review/1_spread'; // Adjusted import to point to the basic app
// import App from './0_review/2_immer'; // Adjusted import to point to the basic app
// import App from './3_fetch/weather'; // Adjusted import to point to the basic app
// import App from './4_axios/weather'; // Adjusted import to point to the basic app
// import App from './5_movie/MovieList'; // Adjusted import to point to the basic app
// import App from './6_movie_link/App'; // Adjusted import to point to the basic app
// import App from './0716_practice/practice'; // Adjusted import to point to the basic app
// import App from './0716_practice/practice_shadowing'; // Adjusted import to point to the basic app
// import App from './9_spring_conn/Conn_test'; // Adjusted import to point to the basic app
// import App from './9_spring_conn/App'; // Adjusted import to point to the basic app
import App from './9_member_spring_conn/App'; // Adjusted import to point to the basic app


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
