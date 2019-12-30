import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField';

class App extends Component {
  state = {
    textbox: "",
    len: 0,
    hoihoi: 9
  }
  
  updateLength = (event) => {
    const val = event.target.value;
    const length = val.length;
    console.log(val);
    console.log(length);
    this.setState({
      hoihoi: length
    })
    console.log(this.state.hoihoi);
  }

  render() {
    const new_len = this.state.len;
    const new_hoihoi = this.state.hoihoi;
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
          len={new_hoihoi} 
          changed={(event) => this.updateLength(event)}/>
      </div>
    );
  }
}

export default App;
