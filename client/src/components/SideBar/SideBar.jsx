import React from "react";
import xIcon from "../../assets/icons/x.svg";
import logoImg from '../../assets/images/shieldLogo.svg';
import "../SideBar/sidBar.scss";
import home from '../../assets/icons/home.svg';
import profile from '../../assets/icons/profile.svg';
import filters from '../../assets/icons/filters.svg';
import settings from '../../assets/icons/settings.svg';

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
                            className="sidebar__img"
                            src={xIcon}
                            alt="X button to close page"
                            onClick={(event) => props.handleCancel(event)}
                        />
                    </div>
                    <img className="sidebar__logo" src={logoImg} alt="Shield Logo"/>
                </div>
                <div className="sidebar__bottom-section">
                    <div className="sidebar__selection-wrap">
                        <img className="sidebar__checkbox" src={home} alt="select home icon"/>
                        <h2 className="sidebar__select-category">Home</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <img className="sidebar__checkbox" src={profile} alt="select profile icon"/>
                        <h2 className="sidebar__select-category">Profile</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <img className="sidebar__checkbox" src={filters} alt="select filters icon"/>
                        <h2 className="sidebar__select-category">Filters</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <img className="sidebar__checkbox" src={settings} alt="select settings icon"/>
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
