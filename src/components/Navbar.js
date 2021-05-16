const Navbar = () => {
    const title = 'Dojo Blog'
    return ( 
        <nav className="Navbar">
            <div className="Navbar__title">{ title }</div>
            <ul className="Navbar__items">
                <li className="Navbar__item"><a href="#!" className="Navbar__link">Home</a></li>
                <li className="Navbar__item"><a href="#!" className="Navbar__link">New Blog</a></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;