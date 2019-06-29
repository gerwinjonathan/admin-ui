import React from 'react';
import './card.css';

import {Doughnut} from 'react-chartjs-2';

export default class CardDoughnut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Windows', 'Mac OS X', 'Linux', 'Other'],
                datasets: [{
                    label: 'Users',
                    data: [
                        192304012,
                        92318201,
                        100213215,
                        12350800
                    ],
                    backgroundColor: ['blue', 'gray', 'purple', 'black'],
                }]
            }
        }
    }

    render() {
        return(
            <div class="card">
                <h2>{this.props.headingCard}</h2>
                <small>{this.props.description}</small>
                <Doughnut data={this.state.chartData} 
                width={20}
                height={10}
                options={{maintainAspectRatio: true}} />
            </div>
        );
    }
}