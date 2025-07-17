import {useEffect} from 'react';
import axios from 'axios';

function App() {

    useEffect(()=>{
        axios.get('http://localhost:8080/api/member')
            .then(result => console.log(result.data))
    });

    return (<div>확인</div>)
}

export default App;