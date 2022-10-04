import React from 'react'
import classes from './Register.module.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className={classes.loginContainer}>
                    <div className={classes.login}>
                        <h3>Create and account</h3>
                        <div>
                            <form>
                                <div className={`mt-4 ${classes.inputBox}`}>
                                    <input
                                        placeholder='Name'
                                        type="text"
                                        className="form-control p-3" />
                                </div>
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
                                <div className={`mt-4 ${classes.inputBox}`}>
                                    <input
                                        placeholder='confirm password'
                                        type="password"
                                        className="form-control p-3" />
                                </div>
                                <div className="pt-2 text-end">
                                    <ul className={classes.submitBox}>
                                        <li>
                                            <Link to="/">Back to Login</Link>
                                        </li>
                                        <li>
                                            <button>Sing up</button>
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

export default Register