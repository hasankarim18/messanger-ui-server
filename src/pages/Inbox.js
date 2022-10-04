import React from 'react'
import Blank from '../components/Inbox/Blank'
import Footer from '../components/Inbox/Footer'
import Navigation from '../components/Inbox/Navigation'
import SideBar from '../components/Inbox/SideBar'
import Conversation from './Conversation'

const Inbox = () => {
    return (
        <>
            <Navigation />

            <div className="chat_container">
                <div className="container2">
                    <div className="row">
                        <div className="col-2 col-sm-4 pe-0">
                            <SideBar />
                        </div>
                        <div style={{ backgroundColor: "rgb(240, 240, 250)" }} className="col-10 col-sm-8 ps-0">
                            <Blank />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inbox