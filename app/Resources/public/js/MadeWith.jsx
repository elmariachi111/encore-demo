import React from 'react';

export default class MadeWith extends React.Component {
  render() {
    return (
        <section className="section" >
            <div className="container">
                <h1 className="title">
                    Hello World
                </h1>

                <p className="subtitle">
                    My first website made with <i className="fa fa-music"></i> 
                    <strong id="framework">{this.props.name}</strong>!
                </p>
                
            </div>
        </section>      
    );
  }
}