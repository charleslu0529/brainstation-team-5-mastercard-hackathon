import React from 'react';
import '../Header/header.scss';
import hamItUp from '../../assets/icons/hamitup.svg';
import Logo from '../Logo/Logo';


export default function Header() {
    return (
        <section className="header">
            <div className="header__top-section">
                <img
                    className="header__img"
                    src={hamItUp}
                    alt="hamburger icon"
                />
                <div className="header__logo-container">
                    <h1 className="header__title">Shield</h1>
                </div>
            </div>
            <SideBar />
        </section>
    )
}
