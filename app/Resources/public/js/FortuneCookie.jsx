import React from 'react';
import {fetchJson} from './remote.js';

export default class FortuneCookie extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fortune:'' 
        };
    }

    componentDidMount() {
        fetchJson('/api/fortune').then(text => {
            this.setState({
                fortune: text
            });
        });
    }

    render() {
        return(
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Your Fortune is:
                        </h1>
                        <h2 className="subtitle" id="fortune">
                        {this.state.fortune}
                        </h2>
                        
                    </div>
                </div>
            </section>           
        )
    }
}