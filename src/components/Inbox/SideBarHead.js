import React from 'react'
import editimg from '../../assets/edit.svg'
import classes from './Inbox.module.css'

const SideBarHead = () => {
    return (
        <div className={classes.sidebarHead} >
            <span className={classes.start_chat_text} >
                Start a  chat
            </span>
            <span>
                <img height="20px" src={editimg} alt="" />
            </span>
        </div>
    )
}

export default SideBarHead