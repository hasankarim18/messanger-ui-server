import React from 'react'
import classes from './Inbox.module.css'
import chatImg from '../../assets/chat.svg'
import messageImg from '../../assets/message.svg'

const Blank = () => {
    return (
        <div className={classes.blank}  >
            <div>
                <img width="100px" src={messageImg} alt="Conversations" />
                <span>

                </span>
            </div>
        </div>
    )
}

export default Blank