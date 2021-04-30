import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';

function Logo() {
    return (
        <Link to="/">
            <img src={logo} alt="Master Card"/>
        </Link>
    )
}

export default Logo
