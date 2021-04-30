import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import classes from './logo.module.scss';

function Logo() {
    return (
        <Link to="/cards" className={classes.logo}>
            <img src={logo} alt="Master Card" className={classes.logo__image}/>
        </Link>
    )
}

export default Logo
