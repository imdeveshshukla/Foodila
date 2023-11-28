import { LOGO_URL } from "../utils/Images";

const NavBar = () =>(
    <nav className="myNav">
    <img src={LOGO_URL} alt="Logo" className="logoImg"/>
    <ul className="navItems">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
    </ul>
    </nav>
);

export default NavBar;