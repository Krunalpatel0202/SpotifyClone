import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import spotify from './Sidebar';

function Player() {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar />
            <Body spotify={spotify} />
            {/* Sidebar
            Body */}
            </div>
            <Footer />
        </div>
    )
}

export default Player;
