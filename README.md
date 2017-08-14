# react-rain-animation
A stateful rain animation component for your react project. No SVG animations no jQuery, no additional dependencies. Addapted from raichu26's [codepen](https://codepen.io/alemesre/pen/hAxGg?q=css%20rain&limit=all&order=popularity&depth=everything&show_forks=false). Live demo [here](https://willnickerson.github.io/react-rain-demo)


## Installation

To install this Component, run `yarn add react-rain-animation` or `npm install react-rain-animation`.

## Usage

##Simple

To use the component, In your react Application just import the component and styles. Also make sure to specify the numDrops property, as it is required.

```javascript
import React from 'react';
import ReactRain from 'react-rain-animation';

// import all the styles
import "react-rain-animation/lib/style.css";


const MyComponent = (props) => {

    return (
        <ReactRain
          numDrops="500"
        />

}

export default MyComponent;


```

###With Changing State

To have user input change the number of drops rendered, include this component and some sort of input component (this example uses react-canvas-knob) as sibblings inside of a parent component. 

To avoid the "Maximum call stack size exceded" error, make sure to have 2 separate handlers (i.e. onChange and onChaneEnd). This way, the number of drops does not have to update every time the input value changes, but rather when the user has finished changing the input.


```javascript

import React, { Component } from 'react';
import ReactRain from 'react-rain-animation';
import Knob from 'react-canvas-knob';
import 'react-rain-animation/lib/style.css';

const initVal = 25;

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDrops: initVal,
      knobValue: initVal
    };
  }

  handleChange = newValue => {
    this.setState({ knobValue: newValue });
  }

  onChangeEnd = () => {
    console.log(this.state.numDrops);
    this.setState({ numDrops: this.state.knobValue });
  }

  render() {
    return (
      <div>
        <ReactRain numDrops={ this.state.numDrops }/>

        <Knob className="Knob"
          onChange={ this.handleChange }
          onChangeEnd={ this.onChangeEnd }
          value={ this.state.knobValue }
        /> 
      </div>
    );
  }
}

export default MyComponent;


```



