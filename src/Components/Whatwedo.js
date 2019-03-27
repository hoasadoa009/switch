import React, { Component } from 'react';
import $ from 'jquery';


class Whatwedo extends Component {

  render() {

    return (
           <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <div className="card text-center item" >
                <div className="card-img"><img src={this.props.image} alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <p className="card-text">{this.props.content}</p>
                  <a href="#" className="btn " >Learn More</a>
                </div>
              </div>
            </div>
    );
  }
}

export default Whatwedo;
