


function App(){

    const inputClick = () => {
        alert('input button clicked');
    }

    const buttonPressed = (event) => {
        event.preventDefault(); // 버튼 클릭 시 화면 갱신 방지, submit 역할을 하지 않도록 함
        alert('button pressed');
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // submit 버튼 클릭 시 화면 갱신 방지
        alert('submit button')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {/* type=button: 얘만 submit 기능이 없다. */}
                <input type='button' value='버튼1' onClick={inputClick}/><br />

                {/* button 태그는 submit 역할을 하고 있어서 화면 갱신이 일어난다. submit: 서버 측에 요청을 보내는 것. 바로 넘어가 버리는 것 */}
                <button onClick={buttonPressed}>버튼2</button><br />

                {/* 대놓고 서버로 갈거다 -> form 태그에 걸어주기*/}
                <input type='submit' value='버튼3' /><br />
            </form>
        </>
    )

}

export default App;