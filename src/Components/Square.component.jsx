import React from 'react';

const Square = props => {
  let style = {
    width: props.size,
    height: props.size,
    position: 'absolute',
    left: props.position.x,
    top: props.position.y,
  }
  if (props.alive) {
    style.backgroundColor = '#000';
  } else {
    style.backgroundColor = '#fff';
  }
  return (
    <div className="Square" style={style}></div>
  );
}

export default Square;