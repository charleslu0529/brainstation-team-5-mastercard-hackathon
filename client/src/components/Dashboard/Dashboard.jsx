import React, { Component } from 'react'
import './Dashboard.scss'
import accountsData from '../../data/dashboard.json'

export class Dashboard extends Component {
    state={
        accounts: accountsData
    }

    const= accountBuilder = (accounts)=>{
        return accounts.map(accountsList=>{
            return (
                <div>
                    <img src={accountsList.image} alt={accountsList.website}/>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Dashboard
