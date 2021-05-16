import { Link } from 'react-router-dom'

const Navbar = () => {
    const title = 'Dojo Blog'
    return ( 
        <nav className="Navbar">
            <div className="Navbar__title">{ title }</div>
            <ul className="Navbar__items">
                <li className="Navbar__item"><Link to="/" className="Navbar__link">Home</Link></li>
                <li className="Navbar__item"><Link to="/create-blog" className="Navbar__link">New Blog</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;