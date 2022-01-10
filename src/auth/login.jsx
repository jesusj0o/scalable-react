import React from 'react'
import './login.css'
const Login = () => {
    return ( 
        <div className='wrapper'>
            <div className='form-content'>
                <form action="submit">
                    <div className='custom-brand'>
                        <h3 className='brand'>LogIn</h3>
                    </div>                   
                    <input type="email" className='custom-login-input' placeholder='Username' />
                    <input type="password" className='custom-login-input' placeholder='Password'/> 
                    <input type="submit" className='btn-login' value={'Log In'} />   
                </form>
                <div className='form-footer'>
                    <a className='underlineHover'>Forgot password?</a>
                </div>
            </div>
        </div>
    );
}
export default Login;
