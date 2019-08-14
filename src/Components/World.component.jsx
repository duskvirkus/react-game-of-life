import React, { Component } from 'react';
import Square from './Square.component';

class World extends Component {

  constructor(props) {
    super(props);
    const aliveGrid = [];
    const w = Math.floor(props.width);
    const h = Math.floor(props.height);
    for (let i = 0; i < w * h; i++) {
      aliveGrid.push(Math.random() > 0.4 ? true : false);
    }
    this.state = {
      width: w,
      height: h,
      offset: {
        x: props.offset.x,
        y: props.offset.y,
      },
      squareSize: props.squareSize,
      aliveGrid: aliveGrid,
    }
    this.nextGen = this.nextGen.bind(this);
    this.interval = setInterval(() => this.nextGen(), 100);
  }

  render() {
    const squares = [];

    for (let j = 0; j < this.state.height; j++) {
      for (let i = 0; i < this.state.width; i++) {
        const alive = this.state.aliveGrid[this.index(i, j)];
        const position = {
          x: i * this.state.squareSize + this.state.offset.x,
          y: j * this.state.squareSize + this.state.offset.y,
        };
        const size = this.state.squareSize + 'px';
        squares.push(<Square alive={alive} position={position} size={size}/>);
      }
    }
    
    return (
      <div className="World">
        {squares}
      </div>
    );
  }

  index(x, y) {
    return Math.floor(x + y * this.state.width);
  }

  nextGen() {
    const next = [];
    for (let j = 0; j < this.state.height; j++) {
      for (let i = 0; i < this.state.width; i++) {
        const alive = this.state.aliveGrid[this.index(i, j)];
        let neighbors = 0;
        for (let k = -1; k <= 1; k++) {
          for (let m = -1; m <= 1; m++) {
            if (
              !(k === 0 && m === 0) &&
              (i + k >= 0) &&
              (i + k < this.state.width) &&
              (j + m >= 0) &&
              (j + m < this.state.height) &&
              this.state.aliveGrid[this.index(i + k, j + m)]
              ) {
              neighbors++;
            }
          }
        }
        if (
          (alive && neighbors === 2) ||
          neighbors === 3
        ) {
          next.push(true);
        } else {
          next.push(false);
        }
      }
    }
    this.setState({
      aliveGrid: next,
    });
    this.forceUpdate();
  }

}

export default World;