import React from 'react'
import classes from './Inbox.module.css'

const Navigation = () => {
    return (
        <div className={classes.navigation} >
            <div className="ps-2 pe-2">
                <nav className={classes.navbar}>
                    <div><h1>My Chat App</h1></div>
                    <div className={classes.logout} > <span>Log out</span> </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation