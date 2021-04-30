import React, { Component } from 'react'
import './Dashboard.scss'
import accountsData from '../../data/dashboard.json'
import dashboardEditIcon from '../../assets/dashboard/dashboard-edit-icon.svg'
import dashboardDeleteIcon from '../../assets/dashboard/dashboard-delete-icon.svg'

export class Dashboard extends Component {
    state={
        accounts: accountsData
    }


    
    render() {
        let accounts = this.state.accounts.map(accountsList=>{
            return (
                <div className='accounts__row'>
                    <div>
                    <img src={accountsList.image} alt={accountsList.website}/>
                    </div>
                    <div>
                        <h4>{accountsList.website}</h4>
                        <p>{accountsList.date}</p>
                    </div>
                    <img src={dashboardEditIcon} alt='dashboard-Edit-Icon'/>
                    <img src={dashboardDeleteIcon} alt='dashboard-Delete-Icon'/>
                </div>
        )})
        return (
            <div className='dashboard'>
                <p className='dashboard__paragraph'>Overview</p>
                <h2 clasName='dashboard__header'>Dashboard</h2>
                <div className='dashboard__card'>
                </div>
                <h3 className='dashboard__subheader'>ACCOUNTS</h3>
                {accounts}
            </div>
        )
    }
}

export default Dashboard
