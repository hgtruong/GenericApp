import React from 'react';
import RenderText from './RenderText.js';


class InputComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }

  handleInputChange = (event) => {
    // Handle the input change
    this.setState({
      text: event.target.value
    });

  };

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange}/>
        <RenderText myText={this.state.text}/>
        <div> <b> {this.state.text} </b></div>
      </div>
    );
  }

};

export default InputComponent;

// Goal -> Have our input box display the text on our webage as we type

// -> on clicking "BOLD" make the data display bold

/// make an event handler -> onChange that run handleInputChange()
  // handleInputChange -> take our keystrokes, and save teh data in state

// To make our text display in our DOM -> do osmething to read the state, and display to the DOM