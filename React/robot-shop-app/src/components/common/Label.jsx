import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


class Label extends Component {
  
   
    render() {
        return ( 
           <Card.Subtitle>
               ID: {this.props.id},
               Title: {this.props.title}
           </Card.Subtitle>
        )
    }
  }
  export default Label