import React from "react";
import "./Login.scss";
import logo from '../../assets/logo/logo.svg'
import loginUserIcon from "../../assets/login/login-username-icon.svg";
import loginPasswordIcon from "../../assets/login/login-password-icon.svg";
import loginChevronIcon from "../../assets/login/login-chevron-icon.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <div className="top__container">
                <h1 className="login__header">Welcome to</h1>
                <img className="brand__logo" alt="brand__logo" src={logo} />
                <form className="login__form">
                    <div className="form__container">
                        <img src={loginUserIcon} alt="login-username-icon" />
                        <input
                            className="login-form__username"
                            type="text"
                            name="Username"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form__container">
                        <img
                            src={loginPasswordIcon}
                            alt="login-password-icon"
                        />
                        <input
                            className="login-form__password"
                            type="password"
                            name="Password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form__container">
                        <input
                            className="form__checkbox"
                            type="checkbox"
                            name="checkbox"
                        />
                        <p className="checkbox__text">Remember my username</p>
                    </div>
                    <Link to="/cards">
                        <button className="login__button">Log in</button>
                    </Link>
                </form>
                <div className="chevron__container">
                    <p className="chevron__text">Need help signing in?</p>
                    <img
                        className="chevron__image"
                        src={loginChevronIcon}
                        alt="login-chevron-icon"
                    />
                </div>
            </div>
            <div className="lower__container">
                <p className="lower__text">
                    Don't have a username and password?
                </p>
                <p className="lower__text--bold">Set them up now.</p>
            </div>
        </div>
    );
}

export default Login;
