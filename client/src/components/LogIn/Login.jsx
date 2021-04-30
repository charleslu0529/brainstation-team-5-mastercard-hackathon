import React from 'react'
import './Login.scss'
import loginUserIcon from '../../assets/login/login-username-icon.svg'
import loginPasswordIcon from '../../assets/login/login-password-icon.svg'
import loginChevronIcon from '../../assets/login/login-chevron-icon.svg'


function Login() {
    return (
        <div>
           <div className='top__container'>
                <h1>Welcome to</h1> 
                <img alt='brand__logo'/>
                <form className='login__form'>
                    <div className='form__container'>
                        <img src={loginUserIcon} alt='login-username-icon'/>
                    <input
                            className='login-form__username'
                            type='text'
                            name='Username'
                            placeholder='Username'
                    />
                    </div>
                    <div className='form__container'>
                        <img src={loginPasswordIcon} alt='login-password-icon'/>
                    <input
                            className='login-form__password'
                            type='password'
                            name='Password'
                            placeholder='Password'
                    />
                    </div>
                    <div className='form__container'>
                        <input
                                className='form__checkbox'
                                type='checkbox'
                                name='checkbox'
                            />
                        <p className='checkbox__text'>Remember my username</p>
                    </div>
                    <button className='login__button'>Log in</button>
                </form>
                <div>
                <p className='chevron__text'>Need help signing in?</p>
                <img className='chevron__image' src={loginChevronIcon} alt='login-chevron-icon'/>
                </div>
            </div>
            <div className='lower__container'>
                <p className='lower__text'>Don't have a username and password?</p>
                <p className='lower__text--bold'>Set them up now.</p>
            </div>
        </div>
        
    )
}

export default Login
