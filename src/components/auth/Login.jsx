import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleOnClick = (e) => {
        e.preventDefault();
        setError(false)
        // valid credentials: username = john; password = changeme;
        axios
            .post("https://sandbox-server.mauaznar.com/auth/login", {
                username: `${username}`,
                password: `${password}`,
            })
            .then((result) => {
                console.log(result.data.accessToken);
            })
            .catch((e) => {
                console.log(e);
                setError(true);
            });
    };

    return (
        <div className="wrapper">
            <div className="form-content">
                <form action="submit">
                    <div className="custom-brand">
                        <h3 className="brand">LogIn</h3>
                    </div>
                    <input
                        type="email"
                        name="username"
                        value={username}
                        onInput={e => setUsername(e.target.value)}
                        className="custom-login-input"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onInput={e => setPassword(e.target.value)}
                        className="custom-login-input"
                        placeholder="Password"
                    />
                    <input
                        type="submit"
                        className="btn-login"
                        value={"Log In"}
                        onClick={handleOnClick}
                    />
                    {
                        error ? <div className="error-alert">Userame or password must be wrong</div> : null
                    }
                </form>
                <div className="form-footer">
                    <a className="custom-link" href={"#"}>
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Login;
