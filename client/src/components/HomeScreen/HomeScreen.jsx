import React from 'react';
import '../HomeScreen/homeScreen.scss';
import {Link} from 'react-router-dom';
import Header from '../Header/Header'


export default function HomeScreen() {
    return (
        <section >
            <Header/>
            <div className="homescreen">
                <h2 className="homescreen__sub-title">Cards</h2>
                <Link
                    to='/dashboard'  
                    className='homescreen__card-link' >
                    <div className="homescreen__card"></div>
                </Link>
                <Link className="homescreen__link" to='/cards/add'>
                    <div className="homescreen__new-card">
                        <h3 className="homescreen__add-new-card-text">Add New Card</h3>
                    </div>
                </Link>
            </div>
        </section>
    )
}
