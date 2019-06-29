import React from 'react';
import './items.css';

export default class Items extends React.Component {
    render() {
        return(
            <tr class="slide-right">
                <td><img id="icon" src={this.props.dataImage} alt={this.props.image}></img></td>
                <td id="icon-content">{this.props.dataMenus}</td>
                <td>
                    <tr>
                        <td id="notification">{this.props.notif}</td>
                    </tr>
                </td>
            </tr>
        );
    }
}