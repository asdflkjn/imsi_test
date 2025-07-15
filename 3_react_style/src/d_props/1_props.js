
/*
     App
     |
     Welcomedialog
     |
     TextPart
     |
     FancyBorder
*/

import './temp.css';

const FancyBorder = (props) => {
    return(
        <div className='FancyBorder'>
            <h1 className='Dialog-title'>{props.title}</h1>
            <p className='Dialog-message'>{props.message}</p>
        </div>
    )
}

const TextPart = (props) => {
    return(
        // 내가 물려받은거 고스란히 넘겨줄게
        <FancyBorder title={props.title} message={props.message}>

        </FancyBorder>
    )
}

const WelcomeDialog = () => {
    return(
        <TextPart title='환영합니다' message='짝꿍님 오늘도 잘 지내봅시다'/>
    )
}

const App = () => {
    return(
        <div>
            <WelcomeDialog />
        </div>
    )
}

export default App;