import React from 'react';
import './card.css';

import {Line} from 'react-chartjs-2';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Jakarta', 'Surabaya', 'Semarang', 'Bandung', 'Yogyakarta', 'Malang', 'Pontianak', 'Makassar'],
                datasets: [{
                    label: 'Populasi',
                    data: [
                        21912301,
                        19231235,
                        21901301,
                        10980412,
                        12310975,
                        891244,
                        12391238,
                        764215
                    ],
                    backgroundColor: 'yellow',
                }]
            }
        }
    }

    render() {
        return(
            <div class="card">
                <h2>{this.props.headingCard}</h2>
                <small>{this.props.description}</small>
                <Line data={this.state.chartData} 
                width={100}
                height={50}
                options={{maintainAspectRatio: true}} />
            </div>
        );
    }
}