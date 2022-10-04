import React from 'react'
import './Chat.module.css'
import ChatHead from './ChatHead'
import Messages from './Messages'
import SendMessage from './SendMessage'


const ChatBody = () => {
    return (
        <div>
            <ChatHead />
            <Messages />
            <SendMessage />
        </div>
    )
}

export default ChatBody