import React from 'react'
import './header.scss'
import hamItUp from '../assets/icons/hamitup.svg'

export default function Header() {
    return (
        <section className="header">
            <div className="header__top-section">
                <img className="header__img" src={hamItUp} alt="hamburger icon"/>
                    <div className="header__logo-container">
                        <h1 className="header__title">SHIELD</h1>
                    </div>
            </div>
        </section>
    )
}
