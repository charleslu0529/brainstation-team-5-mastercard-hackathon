import React from "react";
import "./Dashboard.scss";
import dashboardEditIcon from "../../assets/dashboard/dashboard-edit-icon.svg";
import dashboardDeleteIcon from "../../assets/dashboard/dashboard-delete-icon.svg";

export function Dashboard(props) {
    let accounts = props.accounts.map((accountsList) => {
        return (
            <div className="accounts__row">
                <div className="image__container">
                    <img src={accountsList.image} />
                </div>
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
            <p className="dashboard__paragraph">Overview</p>
            <h2 clasName="header">Dashboard</h2>
            <div className="dashboard__card"></div>
            <h3 className="dashboard__subheader">ACCOUNTS</h3>
            {accounts}
        </div>
    );
}

export default Dashboard;
