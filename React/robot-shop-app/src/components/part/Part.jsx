import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Label from '../common/Label';


class Part extends Component {
  
   
    render() {
        return ( 
            <Card>
             <Card.Header>
                 {this.props.part.title}
             </Card.Header>
             <Card.Body>
                 <Label id={this.props.part.id} title={this.props.part.title}/>
             </Card.Body>
             </Card>
        )
    }
  }
  export default Part