import { useState } from 'react';

function MyForm(props){

    const [nameValue, setNameValue] = useState('');
    const [msgValue, setMsgValue] = useState(''); // msgValue state 추가
    const [countryValue, setCountryValue] = useState(''); // 나라 선택 state 추가
    const [genderValue, setGenderValue] = useState(''); // 성별 선택 state 추가

    const handleName = (event) => {
        setNameValue(event.target.value); // input의 value를 state에 저장
        // console.log(event.target.value); // input의 value를 콘솔에 출력
    }

    const handleMsg = (event) => {
        setMsgValue(event.target.value); // textarea의 value를 state에 저장
    }

    const handleCountry = (event) => {
        setCountryValue(event.target.value); // select의 value를 state에 저장
    }

    const handleGender = (event) => {
        setGenderValue(event.target.value); // radio의 value를 state에 저장
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // submit 버튼 클릭 시 화면 갱신 방지
        let message = ` 이름 : ${nameValue} \n 메시지 : ${msgValue} \n 여행갈 나라 : ${countryValue} \n 성별 : ${genderValue} `;

        alert(message); // 입력된 정보를 alert로 출력
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            {/* value를 주면 read only라서 입력이 안된다. onChange를 걸어주면 입력이 가능해진다. */}
            <input type='text' value={nameValue} onChange={handleName}/><br />
            <hr/>
            <label>메시지</label>
            <textarea value={msgValue} onChange={handleMsg}></textarea><br />

            <label>여행갈 나라는</label>
            <select value={countryValue} onChange={handleCountry}>
                <option value=''>선택하세요</option>
                <option value='한국'>한국</option>
                <option value='일본'>일본</option>
                <option value='미국'>미국</option>
                <option value='영국'>영국</option>
            </select><br />

            <label>성별</label>
            <input type='radio' name='gender' value='남성' onChange={handleGender}></input>남성
            <input type='radio' name='gender' value='여성' onChange={handleGender}></input>여성
            <hr/>
            <button type='submit'>제출</button>
        </form>
    )
}

export default MyForm;