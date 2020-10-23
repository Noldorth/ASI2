import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Label from '../common/Label';
import Visual from './components/Visual';

class Robot extends Component {
  
   
    onRobotSelected = () => {
        this.props.onRobotSelected(this.props.robot.id);
    }
    render() {
        return ( 
            <Card onClick={this.onRobotSelected}>
             <Card.Header>
                 {this.props.robot.title}
             </Card.Header>
             <Card.Body>
                 <Label id={this.props.robot.id} title={this.props.robot.title}/>
                <Visual type={this.props.robot.visual_type} src={this.props.robot.visual_src}/>
             </Card.Body>
             </Card>
        )
    }
  }
  export default Robot