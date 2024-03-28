import React, { useState } from "react"

const Auth = function (props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (<div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        <div><p style={{ color: "black" }}>Not registered yet?</p>{" "}</div>
                        <div><span className="link-primary" onClick={changeAuthMode}>
                            <p className="signup">
                                Sign Up
                            </p>
                        </span></div>


                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
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
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                    <p style={{ color: "black" }}>Already Registered?</p>
                    <span className="link-primary" onClick={changeAuthMode}>
                        <p className="signin">
                            Sign In
                        </p>
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Full Name</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="e.g Jane Doe"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Address"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    {/* Forgot <a href="#">password?</a> */}
                </p>
            </div>
        </form>
    </div>)
}
export default Auth;