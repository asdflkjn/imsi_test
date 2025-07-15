
import '../App.css';
import MyHeader from './components/MyHeader';
import MyMenu from './components/MyMenu';

// 함수 주는 방식 세 가지
// function App(){
// const App = function(){ // 함수 리터럴, 변수의 값으로
const App = () => { // 화살표 함수

    return(
        <div className='App'>
            <MyHeader title='메뉴1' content='맛있는 밥'></MyHeader>
            <MyHeader title='메뉴2' content='맛있는 면'/>
            <MyHeader title='메뉴3' content='맛있는 거'/>
            <hr/>
            <MyMenu data='안녕하세요'></MyMenu>
            <MyMenu data='하이' />
        </div>
    )

}

export default App;