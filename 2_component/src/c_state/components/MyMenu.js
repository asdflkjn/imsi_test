import { Component } from 'react';

// class MyMenu extends Component{
//     render(){        
//         return(
//             <div>
//                 <ul>
//                     <li>{this.props.data}</li>
//                 </ul>
//             </div>
//         );
//     }
// }

function MyMenu(props){
    return(
        <div>
            <ul>
                <li>{props.data}</li>
            </ul>
        </div>
    );
}


export default MyMenu;