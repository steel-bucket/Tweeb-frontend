import React, {useState, useEffect} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Auth.css';

const Auth = function (props) {

    let [authMode, setAuthMode] = useState("signin")
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }


    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_name, setUser_name] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        const user = {
            email, password,
        };

        try {
            const response = await fetch('https://tweeb-api.vercel.app/api/token/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error(`Login failed with status: ${response.status}`);
            }

            const data = await response.json();

            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

            navigate('/posts');  // Redirect after successful login

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const submitregister = async (e) => {
        e.preventDefault();  // Prevent default form submission

        const user = {
            email, password, user_name,
        };

        try {
            const response = await fetch('https://tweeb-api.vercel.app/api/users/register/', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error(`Login failed with status: ${response.status}`);
            }

            navigate('/');
            changeAuthMode();

        } catch (error) {
            console.error('Register error:', error);
        }

    }

    if (authMode === "signin") {
        return (<div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        <div><p style={{color: "black"}}>Not registered yet?</p>{" "}</div>
                        <div><span className="link-primary" onClick={changeAuthMode}>
                            <p className="signup">
                                Sign Up
                            </p>
                        </span></div>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" className="form-control mt-1" id="email" name="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control mt-1" id="password" name="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>

                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        <a href="#">Forgot password?</a>
                    </p>
                </div>
            </form>
        </div>)
    }

    return (<div className="Auth-form-container auth">
        <form className="Auth-form" onSubmit={submitregister}>
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                    <p style={{color: "black"}}>Already Registered?</p>
                    <span className="link-primary" onClick={changeAuthMode}>
                        <p className="signin">
                            Sign In
                        </p>
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input type="user_name" className="form-control mt-1" id="user_name" name="user_name"
                           value={user_name}
                           onChange={(e) => setUser_name(e.target.value)}/>

                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input type="email" className="form-control mt-1" id="email" name="email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>

                </div>
                <div className="form-group mt-3">
                    <label>Password (minimum of 8 digits)</label>
                    <input type="password" className="form-control mt-1" id="password" name="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>

                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    Forgot <a href="#">password?</a>
                </p>
            </div>
        </form>
    </div>)
}
export default Auth;