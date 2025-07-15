import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
// import App from './1_component/App1_class';
// import App from './1_component/App1_func'; // 여기에 들어있는 컴포넌트를 찾아서 App이라는 이름으로 사용
// import App from './1_component/App2_tag';
// import App from './1_component/App3_variable';
// import App from './2_props/App1_Book';
import App from './2_props/App2_Button';
// import App from './2_props/App3_MyHeader';


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
