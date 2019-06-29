import React from 'react';
import './card.css';

export default class CardComponent extends React.Component {
    render() {
        return(
            <div class="card">
                <h2>{this.props.headingCard}</h2>
                <small>{this.props.description}</small>
            </div>
        );
    }
}