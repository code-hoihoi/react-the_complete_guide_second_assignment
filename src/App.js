import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField/InputField';
import Validation from './Validation/LengthValidation';
import Character from './Characters/Character';

class App extends Component {
  state = {
    textbox: "",
    length: 0,
    characters: []
  }
  
  // Generate unique id to use it as a key of this.state.characters
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

  // Update the length displayed below the textbox
  // Also, update the character components according to the textbox
  updateLength = (event) => {
    const text = event.target.value;
    const len = text.length;
    const chars = [];

    for (let i = 0; i < len; i++) {
      const uniqueId = this.generateUuid();
      const addedCharacter = {id:uniqueId, character: text[i]};
      chars.push(addedCharacter);
    }

    this.setState({
      textbox: text,
      length: len,
      characters: chars
    })
  }

  // Delete a character when a Character component is clicked
  // This action also deletes the corresponding character in the textbox
  deleteCharacter = (index) => {
    const chars = [...this.state.characters];
    chars.splice(index, 1);
    const len = chars.length;
    let text = "";
    for (let i = 0; i < len; i++) {
      text = text + chars[i].character;
    }
    this.setState({
      textbox: text, 
      length: len, 
      characters: chars
    })
  }

  render() {
    let characters = null;
    if(this.state.characters.length > 0){
      // Assign rendering content to characters variable
      characters = (
        <div>
          {/* Use map function to render array */}
          {this.state.characters.map((char, index) => {
            return <Character
              key={char.id} 
              character={char.character} 
              click={() => this.deleteCharacter(index)} />
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
          textbox={this.state.textbox} 
          length={this.state.length} 
          changed={(event) => this.updateLength(event)}/>
        <Validation length={this.state.length} />
        {characters}
      </div>
    );
  }
}

export default App;
