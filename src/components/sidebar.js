import React from 'react';
import './sidebar.css';
import PhotoProfile from './photo-profile/photo-profile.js';
import MenuSideBar from './menuBar/menuBar';
import Footer from './footer/footer';

export default class SideBar extends React.Component {
    render() {
        return(
            <div class="sidebar slide-right">
                <PhotoProfile />
                <MenuSideBar />
            </div>
        );
    }
}