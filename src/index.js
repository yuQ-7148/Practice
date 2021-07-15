import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
//var h1 = React.createElement('h1', null, 'Hello World!')

class HelloWorld extends React.Component{   
  constructor(proos) {
    super(proos);
    this.state = {
      web: false
    }
  }

  render() {
    return (
      <div>
        <p>Your REST API URL is:
          {(this.state.web) ? <a href="www.baidu.com">www.baidu.com</a> : <a href="www.google.com">www.google.com</a>}
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld></HelloWorld>,
  document.getElementById('content')
)