import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import BookIcon from '@mui/icons-material/Book';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import './Nav-bar.css'

function NavBar() {
    return (
        <nav className="navBar">
            <ul className='menu'>
                <Link className="linkItem" to="/"><HomeIcon /><span>Acceuil</span></Link>
                <Link className="linkItem" to="/a-propos/"><PersonIcon /><span>A propos</span></Link>
                <Link className="linkItem" to="/cv/"><BadgeIcon /><span>CV</span></Link>
                <Link className="linkItem" to="/portfolio/"><BadgeIcon /><span>Réalisation</span></Link>
                <Link className="linkItem" to="/blog/"><BookIcon /><span>Blog</span></Link>
                <Link className="linkItem" to="/contact/"><PhoneEnabledIcon /><span>Contact</span></Link>
            </ul>
        </nav>
    )
}

export default NavBar
