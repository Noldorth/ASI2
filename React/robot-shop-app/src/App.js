import React, { Component } from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import LeftSide from './components/LeftSide';
import MiddleSide from './components/MiddleSide';

class App extends Component {
  state = {
      // state is initialized by a props
      listRobots: [], 
      listParts: [],
      selectedPartIds: [], 
     
  }
  componentDidMount() {
    fetch("https://pure-temple-56604.herokuapp.com/robots").then(
      resp => resp.json()).then(value => this.setState({listRobots : value}))

      fetch("https://pure-temple-56604.herokuapp.com/parts").then(
        resp => resp.json()).then(value => this.setState({listParts : value}))
    
  }

  handleRobotSelected = (id) => {
     let test = this.state.listRobots.find(robot => robot.id === id).parts;
    this.setState({selectedPartIds: test})
  }

  render() {
      return ( 
        <Container>
          <Row>
            <LeftSide listRobots={this.state.listRobots} onRobotSelected={this.handleRobotSelected}/>
            <MiddleSide listParts={this.state.listParts.filter(part => part.id === this.state.selectedPartIds)}></MiddleSide>
            <Col>Test3</Col>
          </Row>
        </Container>
      )
  }
}
export default App