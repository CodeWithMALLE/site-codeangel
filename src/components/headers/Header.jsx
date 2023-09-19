import NavBar from "./Nav-bar";
import ProfileImg from "./Profile-img";
import "./Header.css"

import Footer from "./Footer";

function Header() {


    return (
        <header className="header">
            <ProfileImg />
            <NavBar />
            <Footer className='footer'/>
        </header>
    )
}

export default Header
