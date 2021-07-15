import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
//var h1 = React.createElement('h1', null, 'Hello World!')

class HelloWorld extends React.Component{   
  getUrl() {
    return 'http://webapplog.com'
  }
  render() {
    return (
      <div>
        <p>Your REST API URL is:
          <a href={this.getUrl()}>
            {this.getUrl()}
          </a>
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld></HelloWorld>,
  document.getElementById('content')
)