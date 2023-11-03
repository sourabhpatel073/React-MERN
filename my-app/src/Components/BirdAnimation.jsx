import React from 'react';
import './BirdAnimation.css';

function BirdAnimation() {
  return (
    <div className="sky">
      <div className="bird">
        <div className="eye"></div>
        <div className="beak"></div>
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
        <div className="leg left"></div>
        <div className="leg right"></div>
        <div className="tail"></div>
      </div>
    </div>
  );
}

export default BirdAnimation;
