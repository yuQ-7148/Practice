import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
var h1 = React.createElement('h1', null, 'Hello World!')
class HelloWorld extends React.Component{   
  //包含React组件的变量的名称应该首字母大写
  render() {
    return React.createElement('div', null, h1, h1)
  }
}

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('content')
)