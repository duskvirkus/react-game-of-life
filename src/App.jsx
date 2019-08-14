import React, { Component } from 'react';
import World from './Components/World.component';

class App extends Component {
  render() {
    const squareSize = 25;
    const offset = {
      x: (window.innerWidth % squareSize) / 2,
      y: (window.innerHeight % squareSize) / 2,
    };
    return (
      <div className="App">
        <World width={window.innerWidth / squareSize} height={window.innerHeight / squareSize} squareSize={squareSize} offset={offset}/>
      </div>
    );
  }
}

export default App;
