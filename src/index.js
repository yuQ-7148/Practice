import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
//var h1 = React.createElement('h1', null, 'Hello World!')

class HelloWorld extends React.Component{   
  //包含React组件的变量的名称应该首字母大写
  render() {
    /*
    console.log(Object.isFrozen(this.props))
  
    if (this.props.heading) return <h1>Hello</h1>
    else return <p>Hello</p>*/
    //createClass()中的render()方法只能返回单个元素

    return React.createElement('h1', null, 'Hello ' + this.props.frameworkName + ' world!!!')
    //HelloWorld组件所有属性被传递到<h1>元素中
  }
}

ReactDOM.render(
  //React.createElement(HelloWorld, null),
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, {
      id: 'ember',
      frameworkName: 'Ember.js',
      title: 'A framework for creating ambitious web applications'
    }),
    React.createElement(HelloWorld, {
      id: 'backbone',
      frameworkName: 'Backbone.js',
      title: 'Backbone.js gives structure to web applications...'
    }),
    React.createElement(HelloWorld, {
      id: 'angular',
      frameworkName: 'Angular.js',
      title: 'Superheroic JavaScript MVM Framework'
    })
  ),
  //创建组件时，父组件为子组件分配属性。子组件不应该修改它的属性
  document.getElementById('content')
)