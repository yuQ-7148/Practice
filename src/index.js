import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
var h1 = React.createElement('h1', null, 'Hello World!')
class HelloWorld extends React.Component{
  render() {
    return React.createElement('div', null, h1, h1)
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('content')
)