import { Link } from 'react-router-dom';

function Header(){
    return(
        <header id='header_section'>
            <nav id='nav'>
                <ul>
                    <li><Link to='/'>예매</Link></li>
                    <li><Link to='/'>영화</Link></li>
                    <li><Link to='/'>영화관</Link></li>
                    <li><Link to='/event/:id'>이벤트</Link></li>
                    <li><Link to='/'>스토어</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;