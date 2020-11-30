import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')
const jsxElement = <h1>This is a JSX element</h1>
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Cannigia Laluw</p>
    <small>Nov 29, 2020</small>
  </header>
)


ReactDOM.render(
 header, rootElement
);

