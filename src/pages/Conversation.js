import React from 'react'
import Navigation from '../components/Inbox/Navigation'
import SideBar from '../components/Inbox/SideBar'
import Blank from '../components/Inbox/Blank'
import Footer from '../components/Inbox/Footer'
import ChatBody from '../components/Inbox/ChatBody/ChatBody'

const Conversation = () => {
    return (
        <>
            <Navigation />
            <div className="chat_container">
                <div className="container2">
                    <div className="row">
                        <div className="col-3 col-sm-4 pe-0">
                            <SideBar />
                        </div>
                        <div className="col-9 col-sm-8 ps-0 pe-0">
                            <ChatBody />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Conversation