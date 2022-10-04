import React from 'react'
import Message from './Message'
import classes from './Chat.module.css'

const Messages = () => {
    return (
        <div className={classes.messages}  >
            <Message justify="start" message="Hjdjd" />
            <Message justify="start" message="How are you?" />
            <Message justify="end" message="I am fine what about you?" />
            <Message justify="start" message="Hi" />
            <Message justify="start" message="How are you?" />
            <Message justify="end" message="I am fine what about you?" />
            <Message justify="start" message="Hi" />
            <Message justify="start" message="How are you?" />
            <Message justify="end" message="I am fine what about you?" />
            <Message justify="start" message="Hi" />
            <Message justify="start" message="How are you?" />
            <Message justify="end" message="I am fine what about you?" />
            <Message justify="start" message="I am fine what about you? I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?" />
            <Message justify="start" message="How are you?" />
            <Message justify="end" message="I am fine what about you?" />
            <Message justify="start" message="Hi" />
            <Message justify="start" message="How are you?" />
            <Message justify="end" message="I am fine what about you? I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?I am fine what about you?" />
        </div>
    )
}

export default Messages