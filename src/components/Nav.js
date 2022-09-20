import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {

    return (
        <div className="nav">
            <li><Link to="/">home</Link></li>
            <li><Link to="/About">about</Link></li>
            <li><Link to="/Projects">projects</Link></li>
            <li><a href="https://blog.codersalman.live">blog</a></li>
            <li><a href="mailto:">contact</a></li>
        </div>

    );

}

export default Nav;