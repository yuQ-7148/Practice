import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
//var h1 = React.createElement('h1', null, 'Hello World!')

class HelloWorld extends React.Component{   
  //包含React组件的变量的名称应该首字母大写
  render() {
    return (
      <h1>Hello {this.props.frameworkName} world!!!</h1>
      //用花括号输出变量
    )
  }
}

ReactDOM.render(
  //React.createElement(HelloWorld, null),
  <div>
    <HelloWorld
      id="ember"
      frameworkName="Ember.js"
      title="A framework for creating ambitious web applications"
    ></HelloWorld>
    <HelloWorld
      id="backbone"
      frameworkName="Backbone.js"
      title="Backbone.js gives structure to web applications..."
    ></HelloWorld>
    <HelloWorld
      id="angular"
      frameworkName="Angular.js"
      title="Superheroic JavaScript MVW Framework"
    ></HelloWorld>
  </div>,
  //创建组件时，父组件为子组件分配属性。子组件不应该修改它的属性
  document.getElementById('content')
)