# react-rain-animation
A stateful rain animation component for your react project. No SVG animations no jQuery, no additional dependencies.


## Installation

To install this Component, run `yarn add react-rain-animation` or `npm install react-rain-animation`.

## Usage

To use the component, In your react Application just do

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

