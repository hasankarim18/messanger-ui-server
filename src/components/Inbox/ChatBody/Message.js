import React from 'react'
import classes from './Chat.module.css'

const Message = ({ message, justify }) => {

    let paddingClass = null

    if (justify === 'end') {
        paddingClass = classes.paddingLeft
    } else if (justify === 'start') {
        paddingClass = classes.paddingRight
    }


    return (
        <div className={classes.message}>
            <section
                className={`${paddingClass} d-flex justify-content-${justify}`}>
                <div className={classes.single_message} >
                    {message}
                </div>
            </section>
        </div>
    )
}

export default Message