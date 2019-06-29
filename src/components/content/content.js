import React from 'react';
import './content.css';

/*Chart Implementation*/
import Card from '../card/card';
import CardDoughnut from '../card/card_doughnut';
import CardBar from '../card/card_bar';
import CardComponent from '../card/cardComponent';

export default class Content extends React.Component {
    render() {
        return(
            <div class="content">
                <h2>#Documentation</h2><br />
                <Card headingCard={'Chart JS Implementation'} description={'Use ChartJS 2 as the implementation for Admin UI Templates.'} /><br />
                <div class="section">
                <CardDoughnut headingCard={'See The World'} description={'With real time database and clear UI design makes you productive.'} /><br />
                </div>
                <div class="section-right">
                <CardBar headingCard={'Various Vizualitation'} description={'Use any design / implementation for your data.'} /><br />
                </div>

                <h2>#Gallery</h2><br />
                <CardComponent headingCard={'See Through Gallery'} description={'Imagine the world with thousands of reason.'} /><br />

                <h2>#Updated Version</h2>
                <small>Here's a list of updated version of this templates:</small>
                <p>[Version 1.0] Simple Admin UI starting development.</p><br />

                <h2>#Contact Me</h2>
                <small>Please contact me at: </small>
                <p>Facebook : Gerwin Jonathan H.</p>
                <p>Github   : github.com/gerwinjonathan</p>
                <p>Line     : gerwinjonathan</p>
                <p>Instagram: gerwinjonathan</p>
                <br />
                <br />
                <br />
            </div>
        );
    }
}