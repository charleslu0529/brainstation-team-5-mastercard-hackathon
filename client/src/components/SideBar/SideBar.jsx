import React from "react";
import xIcon from "../../assets/icons/x.svg";
import "./sideBar.scss";

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
                </div>
                <div className="sidebar__bottom-section">
                    <div className="sidebar__selection-wrap">
                        <div className="sidebar__checkbox"></div>
                        <h2 className="sidebar__select-category">Home</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <div className="sidebar__checkbox"></div>
                        <h2 className="sidebar__select-category">Profile</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <div className="sidebar__checkbox"></div>
                        <h2 className="sidebar__select-category">Filters</h2>
                    </div>
                    <div className="sidebar__selection-wrap">
                        <div className="sidebar__checkbox"></div>
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
