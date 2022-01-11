import React, {useState} from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {

    const [error, setError] = useState(false)

    // useEffect(() => {
    //     sleep()
    // }, [])


    const handleOnClick = (e) => {
        e.preventDefault()


        // valid credentials: username = john; password = changeme;
        axios.post('https://sandbox-server.mauaznar.com/auth/login', {
            "username": "john",
            "password": "changeme"
        }).then((result) => {
            console.log(result.data.accessToken)
        }).catch(e => {
            console.log(e)
        })
        // console.log(post)
    }

    return ( 
        <div className='wrapper'>
            <div className='form-content'>
                <form action="submit">
                    <div className='custom-brand'>
                        <h3 className='brand'>LogIn</h3>
                    </div>                   
                    <input type="email" name="username" className='custom-login-input' placeholder='Username' />
                    <input type="password" name="password" className='custom-login-input' placeholder='Password'/>
                    <input type="submit" className='btn-login' value={'Log In'} onClick={handleOnClick} />
                </form>
                <div className='form-footer'>
                    <a className='underlineHover' href={'#'} >Forgot password?</a>
                </div>
                {
                    error ?  <div>
                            Credentials invalid
                        </div>
                        : null
                }

            </div>
        </div>
    );
}
export default Login;
