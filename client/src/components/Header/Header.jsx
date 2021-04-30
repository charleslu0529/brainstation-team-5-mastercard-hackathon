import React, {useState} from 'react';
import '../Header/header.scss';
import hamItUp from '../../assets/icons/hamitup.svg';
import Logo from '../Logo/Logo';
import SideBar from '../SideBar/SideBar'


export default function Header() {

    const [showNav, setshowNav] = useState("");

    const handleNavClick = (event) => {
        event.stopPropagation();
        setshowNav(showNav === "" ? "show" : "");
    }

    return (
        <section className="header">
            <div className="header__top-section">
                <img
                    className="header__img"
                    src={hamItUp}
                    alt="hamburger icon"
                    onClick={(event)=>handleNavClick(event)}
                />
                <div className="header__logo-container">
                    <Logo />
                </div>
            </div>
            <SideBar showNav={showNav} handleCancel={handleNavClick}/>
        </section>
    )
}
