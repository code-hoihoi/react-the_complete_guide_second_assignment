import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField';
import Validation from './Validation/LengthValidation';
import Character from './Characters/Character'

class App extends Component {
  state = {
    textbox: "",
    length: 0,
    characters: []
  }
  
  generateUuid = () => {
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
      switch (chars[i]) {
        case "x":
          chars[i] = Math.floor(Math.random() * 16).toString(16);
          break;
        case "y":
          chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
          break;
        default:
          break;
      }
    }
    return chars.join("");
  }

  updateLength = (event) => {
    const val = event.target.value;
    const length = val.length;
    const uniqueId = this.generateUuid();
    const prevLength = this.state.length;
    const chars = [...this.state.characters];
    const addedCharacter = {id:uniqueId, character: val[length-1]};
    if(prevLength > length) {
      chars.splice(length, 1);
    }
    else if(prevLength < length) {
      chars[length-1] = addedCharacter;
    }
    this.setState({
      textbox: val,
      length: length,
      characters: chars
    })
  }

  deleteCharacter = (uniqueId) => {
    const chars = [...this.state.characters];
    chars.splice(uniqueId, 1);
    this.setState({
      characters: chars
    })
    console.log(chars)
  }

  render() {
    let characters = null;
    if(this.state.characters.length > 0){
      characters = (
        <div>
          {this.state.characters.map((char, index) => {
            return <Character
              key={char.id} 
              character={char.character} 
              click={() => this.deleteCharacter(char.id)} />
          })}
        </div>
      )
    }
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
          length={this.state.length} 
          changed={(event) => this.updateLength(event)}/>
        <Validation length={this.state.length} />
        {characters}
      </div>
    );
  }
}

export default App;
