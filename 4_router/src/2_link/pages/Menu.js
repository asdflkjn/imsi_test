import { Link } from "react-router-dom";

const styles = {
    navStyles: {
        color: 'red'
        , backgroundColor: 'yellow'
        , textdecoration: 'none'
        , border: '2px dashed blue'
    },

    lineStyles: {
        display:'inline'
        , padding:'20px'
    }    
}

const Menu = () => {
    return(
        <div style={styles.navStyles}>
            <ul>
                <li style={styles.lineStyles}>
                    {/* a태그는 전체 페이지를 바꿔버린다. 그래서 a태그 대신에 Link를 사용한다. */}
                    {/* <a href="/">홈</a> */}
                    <Link to="/">홈</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href="/first">첫번째</a> */}
                    <Link to="/first">첫번째</Link>
                </li>
                <li style={styles.lineStyles}>
                    {/* <a href="/second">두번째</a> */}
                    <Link to="/second">두번째</Link>
                </li>
                <li style={styles.lineStyles}>
                    <Link to="/third">세번째</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;