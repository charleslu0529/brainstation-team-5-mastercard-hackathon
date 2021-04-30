import React from 'react';
import xIcon from '../../assets/icons/x.svg';

export default function SideBar() {
    return (
        <section className="sidebar">
            <div className="sidebar__top-section">
                <div className="sidebar__img-wrap">
                    <img src={xIcon} alt="X button to close page"/>
                </div>
            </div>
            <div className="sidebar__bottom-section">
                <div className="sidebar__selection-wrap">
                    <div className="sidebar__checkbox"></div>
                    <h2 className="sidebar__select-category">Home</h2>
                </div>
                <div className="sidebar__selection-wrap">
                    <div className="sidebar__checkbox"></div>
                    <h2 className="sidebar__select-category">Home</h2>
                </div>
                <div className="sidebar__selection-wrap">
                    <div className="sidebar__checkbox"></div>
                    <h2 className="sidebar__select-category">Home</h2>
                </div>
                <div className="sidebar__selection-wrap">
                    <div className="sidebar__checkbox"></div>
                    <h2 className="sidebar__select-category">Home</h2>
                </div>
                    <h2 className="sidebar__contact-us">Contact Us<br>FAQ</br></h2>
            </div>
        </section>
    )
}
