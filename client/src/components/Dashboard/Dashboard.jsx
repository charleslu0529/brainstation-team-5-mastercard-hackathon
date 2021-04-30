import React from "react";
import "./Dashboard.scss";
import dashboardEditIcon from "../../assets/dashboard/dashboard-edit-icon.svg";
import dashboardDeleteIcon from "../../assets/dashboard/dashboard-delete-icon.svg";
import citiCard from "../../assets/images/5502013275323474-citi.svg";

export function Dashboard(props) {
    let accounts = props.accounts.map((accountsList) => {
        return (
            <div className="accounts__row">
                <img src={accountsList.image} className="accounts__image" />
                <div className="row-text__container">
                    <h4 className="row__text">{accountsList.website}</h4>
                    <p className="row__text">{accountsList.date}</p>
                </div>
                <img
                    className="row__icon"
                    src={dashboardEditIcon}
                    alt="dashboard-Edit-Icon"
                />
                <img
                    className="row__icon"
                    src={dashboardDeleteIcon}
                    alt="dashboard-Delete-Icon"
                />
            </div>
        );
    });
    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <p className="dashboard__paragraph">Overview</p>
                <h2 clasName="header">Dashboard</h2>
            </div>
            <div className="dashboard__content">
                <img className="dashboard__card" src={citiCard} />
                <h3 className="dashboard__subheader">ACCOUNTS</h3>
                {accounts}
            </div>
        </div>
    );
}

export default Dashboard;
