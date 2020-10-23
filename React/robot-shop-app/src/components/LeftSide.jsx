import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import Robot from './robot/Robot';


class LeftSide extends Component {
 
    onRobotSelected = () => {
        this.props.onRobotSelected(this.props.robot.id);
    }
  render() {
      return ( 
            <Col>
                {
                this.props.listRobots.map(robot => <Robot key={robot.id} robot={robot} onRobotSelected={this.onRobotSelected}/>)
            }
                </Col>     
      )
  }
}
export default LeftSide