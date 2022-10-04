import React from 'react'
import ChatItems from './ChatItems'
import classes from './Inbox.module.css'
import SideBarHead from './SideBarHead'




const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <SideBarHead />
            <ChatItems />
        </div>
    )
}

export default SideBar