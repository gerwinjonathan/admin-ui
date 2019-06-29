import React from 'react';
import './photo-profile.css';
import ImageAvatar from '../../img/img_avatar.png';

export default class PhotoProfile extends React.Component {
    render() {
        return(
            <div class="photo-profile slide-right">
                <img id="avatar" src={ImageAvatar} alt="Avatar" />
                <div class="profile-content">
                    <h3>Gerwin Jonathan</h3>
                    <h5><i>Front-End Enthusiast</i></h5>
                </div>
                <div class="status">
                    <table id="status">
                        <tr>
                            <td><span class="dot"></span></td>
                            <td><p style={{fontSize: '10pt'}}>Online</p></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}