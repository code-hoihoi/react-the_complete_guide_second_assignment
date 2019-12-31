import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField';

class App extends Component {
  state = {
    textbox: "",
    length: 0
  }
  
  updateLength = (event) => {
    const val = event.target.value;
    const length = val.length;
    console.log(val);
    console.log(length);
    this.setState({
      length: length
    })
    console.log(this.state.hoihoi);
  }

  render() {
    const new_length = this.state.length;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - The Complete Guide</h1>
        </header>
        <p className="App-intro">
          The Second Assignment
        </p>
        <br />

        <InputField 
          length={new_length} 
          changed={(event) => this.updateLength(event)}/>
      </div>
    );
  }
}

export default App;
