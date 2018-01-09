import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';

class App extends Component {
  state = {inputText:''};

  printTextLengthHandler = (event) => {
    this.setState({inputText:event.target.value});
  }

  render() {
    return (
      <div className="App">        
        <input type="text" onChange={this.printTextLengthHandler} value={this.state.inputText}/>
        <ValidationComponent 
          textLength={this.state.inputText.length}
        />
      </div>
    );
  }
}

export default App;
