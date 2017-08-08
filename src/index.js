import React, { Component } from 'react';
import '../lib/style.css';

class Rain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDrops: 250
    };
  }

  startRain() {
    const rainSection = document.getElementById('Rain');

    for(let i = 1; i < this.state.numDrops; i++) {
      const dropLeft = this.randRange(0, 1600);
      const dropTop = this.randRange(-1000, 1400);

      const drop = document.createElement('div');

      drop.setAttribute('class', 'drop');
      drop.setAttribute('id', `drop${i}`);

      rainSection.appendChild(drop);

      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
    }
  }

  stopRain() {
    const rainSection = document.getElementById('Rain');

    while(rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  }

  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  componentDidMount() {
    this.startRain();
  }

  render() {
    return (
      <div id="Rain"/>
    );
  }
}

export default Rain;