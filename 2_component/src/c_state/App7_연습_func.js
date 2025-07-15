import { useState } from 'react';
import '../App.css';


// class MyNav extends Component{
//   render(){
//     var lists = []
//     var data = this.props.data
//     for(var i=0; i<data.length; i++){
//         lists.push(<li key={data[i].id}><a href={data[i].site}>{data[i].name}</a></li>)
//     }
//     return ( <ul>{lists}</ul>)
//   }
// }

function MyNav({ data }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.site}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

function App(){

  let [links, setLinks] = useState(
    [
      { id: 'daum', name: '다음3',  site : 'http://www.daum.net'},
      { id: 'naver', name: '네이버3',  site : 'http://www.naver.com'},
      { id: 'nate', name: '네이트3',  site : 'http://www.nate.com'}
    ]
  )  

    return (
      <div className='App-header'>
          <MyNav data={links}></MyNav>
      </div>
    )
}

export default App;