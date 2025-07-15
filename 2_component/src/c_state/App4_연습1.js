import '../App.css';

import { Component, useState } from 'react';

// function App() {
   
//     let [ title, setTitle]  = useState('맛집정보')
  
//     return (
//        <div className="App">
//        <ul>
//           {/* 여기 li 요소를 클릭시 '맛집정보'라는 title 변수의 값을 변경 */}
//           <li className='App-title' onClick={()=>{ setTitle('돈까스 맛집') }}>돈까스 맛집</li>
//           <li className='App-title' onClick={()=>{ setTitle('호남식당') }}>호남식당</li>
//           <li className='App-title' onClick={()=>{ setTitle('학식') }}>학식</li>
//         </ul>
//         <div className='App-header'>{ title } </div>
//        </div>
//     );
//   }
  
class App extends Component{
     
   constructor(props){

      super(props)

      this.state = { favorite : '맛집정보' }
   }

   render(){
      return(
         <div className="App">
            <div className='App-subtitle'>{this.state.favorite}</div>
            <ul>
               <li className='App-title' onClick={()=>{ this.setState({favorite:'돈까스 맛집'}) }}>돈까스 맛집</li>
               <li className='App-title' onClick={()=>{ this.setState({favorite:'호남식당'}) }}>호남식당</li>
               <li className='App-title' onClick={()=>{ this.setState({favorite:'학식'}) }}>학식</li>
            </ul>
         </div>
      )
   }
}

export default App;



