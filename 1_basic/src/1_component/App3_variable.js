
import '../App.css';

let our = '우리팀 화이팅';

let mystyle = 'App-link';

function msg(){return "오늘도 행복합시다";}

const styleA = {color:'blue', fontSize:'22px'}; // 스타일 객체

function App() {
    return(
        <div className='App'>
            <h2 className={mystyle}>{our}</h2>
            <h2 className='App-link'>{our}</h2>
            <hr/>
            <h4>{msg()}</h4>
            <h4 style={styleA}>{msg()}</h4>
            <h4 style={{ color:'red', fontSize:'22px' }}>{msg()}</h4>
        </div>
    );
}

export default App;