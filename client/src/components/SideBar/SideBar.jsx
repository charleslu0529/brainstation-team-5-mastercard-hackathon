import React from "react";
import xIcon from "../../assets/icons/x.svg";
// import logoImg from '../../assets/images/shieldLogo.svg';
import "./sideBar.scss";
import sidebarFilter from '../../assets/sidebar/sidebar-filters.svg'
import sidebarHome from '../../assets/sidebar/sidebar-home.svg'
import sidebarLogo from '../../assets/sidebar/sidebar-logo.svg'
import sidebarProfile from '../../assets/sidebar/sidebar-profile.svg'
import sidebarSettings from '../../assets/sidebar/sidebar-settings.svg'


export default function SideBar(props) {
    return (
        <>
            <div
                className={`navModal  ${props.showNav}`}
                onClick={(event) => props.handleCancel(event)}
            ></div>
            <section className={`sidebar  ${props.showNav}`}>
                <div className="sidebar__top-section">
                    <div className="sidebar__img-wrap">
                        <img
                            className="sidebar__cancel"
                            src={xIcon}
                            alt="X button to close page"
                            onClick={(event) => props.handleCancel(event)}
                        />
                        <img
                            className='sidebar__logo'
                            src={sidebarLogo}
                            alt='mastercard'
                        />
                        
                    </div>
<<<<<<< HEAD
                    {/* <img className="sidebar__logo" src={logoImg} alt="Shield Logo"/> */}
=======
>>>>>>> b1ac24e51041ca8b0fb186dfe6fee442142f9643
                </div>
                <div className="sidebar__bottom-section">
                    <div className="sidebar__selection-wrap">
                        <img src={sidebarHome} alt=''/>
                        <h2 className="sidebar__select-category">Home</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <img src={sidebarProfile} alt=''/>
                        <h2 className="sidebar__select-category">Profile</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <img src={sidebarFilter} alt=''/>
                        <h2 className="sidebar__select-category">Filters</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                         <img src={sidebarSettings} alt=''/>
                        <h2 className="sidebar__select-category">Settings</h2>
                    </div>
                    <h2 className="sidebar__contact-us">
                        Contact Us <br />
                        FAQ
                    </h2>
                </div>
            </section>
        </>
    );
}
