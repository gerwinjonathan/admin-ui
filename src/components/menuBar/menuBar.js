import React from 'react';
import './menuBar.css';
import Items from '../items/items';

/*Import Icon*/
import Dashboard from '../../img/menu/dashboard-128.png';
import Admin from '../../img/menu/administrator-128.png';
import Statistics from '../../img/menu/statistics-128.png';
import Gallery from '../../img/menu/stack-of-photos-128.png';
import Settings from '../../img/menu/settings-5-128.png';
import Animation from '../../img/menu/timeline-128.png';
import Wifi from '../../img/menu/wireless-128.png';
import Facebook from '../../img/menu/facebook-128.png';
import Youtube from '../../img/menu/play-128.png';
import Twitter from '../../img/menu/twitter-128.png';
import LinkedIn from '../../img/menu/linkedin-3-128.png';
import Instagram from '../../img/menu/instagram-6-128.png';
import Email from '../../img/menu/email-3-128.png';
export default class MenuBar extends React.Component {
    render() {
        return(
            <div class="menu-sidebar">
                <div class="items-sidebar">
                    <table id="items">
                        <Items dataImage={Dashboard} image={'dashboard_logo'} dataMenus={'Dashboard'} notif={'New'} />
                        <Items dataImage={Admin} image={'admin_logo'} dataMenus={'Admin'} notif={'New'} />
                        <Items dataImage={Statistics} image={'statistics_logo'} dataMenus={'Statistics'} notif={'New'} />
                        <Items dataImage={Gallery} image={'gallery_logo'} dataMenus={'Gallery'} notif={'New'} />
                        <Items dataImage={Animation} image={'animation_logo'} dataMenus={'Animation'} notif={'New'} />
                        <Items dataImage={Wifi} image={'wifi_logo'} dataMenus={'Configuration'} notif={'New'} />
                        <Items dataImage={Facebook} image={'facebook_logo'} dataMenus={'Facebook'} notif={'New'} />
                        <Items dataImage={Youtube} image={'youtube_logo'} dataMenus={'Youtube'} notif={'New'} />
                        <Items dataImage={Twitter} image={'twitter_logo'} dataMenus={'Twitter'} notif={'New'} />
                        <Items dataImage={LinkedIn} image={'linkedin_logo'} dataMenus={'LinkedIn'} notif={'New'} />
                        <Items dataImage={Instagram} image={'instagram_icon'} dataMenus={'Instagram'} notif={'New'} />
                        <Items dataImage={Email} image={'email_logo'} dataMenus={'Email'} notif={'New'} /><br />
                        <Items dataImage={Settings} image={'settings_logo'} dataMenus={'Settings'} notif={'New'} />
                    </table>
                </div>
            </div>
        );
    }
}