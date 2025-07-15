import { Component } from 'react';

// class MyHeader extends Component{
//   render(){
//     return (
//     <header>
//       <h1>{this.props.title}</h1>
//       <p>{this.props.content}</p>
//     </header>
//     )
//   }
// }
// 클래스형은 컴포넌트를 상속받고 렌더 함수 안에 써야 하고 props 쓸 때 this로 쓴다.

function MyHeader(props){
  return(
    <header>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </header>
  )
}

export default MyHeader;