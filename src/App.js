import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField';

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      textbox: "",
      len: 0
    };
  }
  
  updateLength = (event) => {
    const val = event.target.value;
    const length = val.length;
    console.log(val);
    console.log(length);
    this.setState = ({
      len: length
    })
    console.log("hoi")
  }

  render() {
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
          len={this.state.len} 
          changed={this.updateLength}/>
      </div>
    );
  }
}

export default App;
