import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
class App extends Component {
    state = {
        // state is initialized by a props
        title: this.props.title,
        numberOver: 0,
    }

    handleChangeTitle = (e) => {
        // this.setState allows us to update the state value
        this.setState({ title: e.target.value })
    }
    handleMouseOver = () => {
        this.setState({ numberOver: this.state.numberOver + 1 });
    }

    render() {
        return ( 
          <div className = 'mb-3' >
            <h1> this is my first React Component </h1> 
            <label htmlFor = 'titleInput' > Title </label> 
            <input type = 'text'
            id = 'titleInput'
            onChange = { this.handleChangeTitle }
            value = { this.state.title }/> 
            <h3 onMouseOver = { this.handleMouseOver } > { this.state.title } </h3> 
            <h2> Number of mouse over { this.state.numberOver } </h2>  
            <Button variant = "primary" > Primary </Button>{' '} 
            </div>
        )
    }
}
export default App