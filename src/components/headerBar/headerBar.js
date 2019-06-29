import React from 'react';
import './headerBar.css';

import Avatar from '../../img/img_avatar.png'
import Notification from '../../img/header-outline/notification.png';
import Message from '../../img/header-outline/envelope.png';
import Settings from '../../img/header-outline/gear.png';

export default class HeaderBar extends React.Component {
    render() {
        return(
            <div class="header-bar fade-in">
                <table id="header">
                    <tr>
                        <td id="heading"><b>{this.props.heading}</b></td>
                        <td id="header-menu">
                            <tr>
                                <td>
                                <img src={Notification} alt="notif" style={{width: '20px'}}></img>
                                </td>
                                <td>
                                <img src={Message} alt="message" style={{width: '20px'}}></img>
                                </td>
                                <td>
                                <img src={Settings} alt="settings" style={{width: '20px'}}></img>
                                </td>
                            </tr>
                        </td>
                        <td id="username"><b>Admin</b></td>
                        <td id="user" style={{width: '30px'}}><img id="avatar-logo" src={Avatar} alt="avatar"></img></td>
                    </tr>
                </table>
            </div>
        );
    }
}