import React from 'react'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className={classes.loginContainer}>
                    <div className={classes.login}>
                        <h3>Sing in to your account</h3>
                        <div>
                            <form>
                                <div className={`mt-4 ${classes.inputBox}`}>

                                    <input
                                        placeholder='Email'
                                        type="text"
                                        className="form-control p-3" />
                                </div>
                                <div className={`mt-4 ${classes.inputBox}`}>
                                    <input
                                        placeholder='password'
                                        type="password"
                                        className="form-control p-3" />
                                </div>
                                <div className="pt-2 text-end">
                                    <ul className={classes.submitBox}>
                                        <li>
                                            <Link to="/register">Reigster</Link>
                                        </li>
                                        <li>
                                            <button>Login</button>
                                        </li>
                                    </ul>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login