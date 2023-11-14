import React, { useState } from "react";
import signup from './assets/movie-svgrepo-com.svg'
import signin from './assets/video-svgrepo-com.svg'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = (props) => {

    const [userDataSignUp, setUserDataSignUp] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange_sign_up = (event) => {
        setUserDataSignUp({
            ...userDataSignUp,
            [event.target.name]: event.target.value,
        });
    };
    const handleChange_sign_in = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const onclick_sign_in_btn = () => {
        const container = document.querySelector(".container123");
        container.classList.remove("sign-up-mode");
    }
    const onclick_sign_in_btn2 = () => {
        const container = document.querySelector(".container123");
        container.classList.remove("sign-up-mode2");
    }
    const onclick_sign_up_btn = () => {
        const container = document.querySelector(".container123");
        container.classList.add("sign-up-mode");
    }
    const onclick_sign_up_btn2 = () => {
        const container = document.querySelector(".container123");
        container.classList.add("sign-up-mode2");
    }

    const navigate = useNavigate();

    const loginForm = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("/backend-link", userData);
            if (res.status !== 200) {
                toast.error(res.data.msg);
            } else {
                toast.success(res.data.msg);
                navigate("/home");
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Some error occurred");
            }
        }
    };

    const signupForm = async (event) => {
        event.preventDefault();
        setUserDataSignUp({
            ...userDataSignUp,
        });
        try {
            const res = await axios.post("/backend-link", userDataSignUp);
            if (res.status === 200) {
                toast.success("User registered successfully");
                navigate("/home");
            } else {
                toast.error("User registration failed" + res.msg);
            }
            onclick_sign_in_btn();
            onclick_sign_in_btn2();
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Some error occurred");
            }
        }

    };

    return (
        <div className="login_body">
            <div className="container123">
                <div className="signin-signup">
                    <form onSubmit={loginForm} className="sign-in-form">
                        <h2 className="title123">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange_sign_in}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="current-password"
                                value={userData.password}
                                onChange={handleChange_sign_in}
                                required
                            />
                        </div>
                        <button type="submit" value="Login" className="btn123">Sign In</button>
                        <p className="social-text123">Or Sign in</p>
                        <div className="social-media123">
                            <a href="/" className="social-icon123">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <p className="account-text">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                id="sign-up-btn2"
                                onClick={onclick_sign_up_btn2}
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                    <form onSubmit={signupForm} className="sign-up-form">
                        <h2 className="title123">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-file-signature"></i>
                            <input
                                type="text"
                                placeholder="Name"
                                id="sign_up_name"
                                onChange={handleChange_sign_up}
                                name="name"
                                value={userDataSignUp.name}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                id="sign_up_username"
                                onChange={handleChange_sign_up}
                                name="username"
                                value={userDataSignUp.username}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                id="sign_up_email"
                                onChange={handleChange_sign_up}
                                name="email"
                                value={userDataSignUp.email}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                id="sign_up_password"
                                onChange={handleChange_sign_up}
                                name="password"
                                value={userDataSignUp.password}
                                required
                            />
                        </div>
                        <button type="submit" value="Sign up" className="btn123" >Sign Up</button>
                        <p className="social-text123">Or Sign in with social platform</p>
                        <div className="social-media123">
                            <a href="/" className="social-icon123">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="social-icon123">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <p className="account-text">Already have an account? <Link to="/Dev-Wizards-NGO.github.io/signup_login" id="sign-in-btn2" onClick={onclick_sign_in_btn2}>Sign in</Link></p>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content123">
                            <h3>Member of our Website</h3>
                            <button className="btn123" id="sign-in-btn" onClick={onclick_sign_in_btn}>Sign in</button>
                        </div>
                        <img src={signin} alt="" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content123">
                            <h3>New to our Website?</h3>
                            <p>Sign up to be a part of our website.</p>
                            <button className="btn123" id="sign-up-btn" onClick={onclick_sign_up_btn}>Sign up</button>
                        </div>
                        <img src={signup} alt="" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
