import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {currentTime: (new Date()).toLocaleString()}
  }

  launchClock() {
    setInterval(
      () => {
        console.log('Updating time...')
        this.setState(
          {currentTime: (new Date()).toLocaleString()}
        )
      }, 1000)
  }

  render() {
    console.log('Rendering Clock...')
    return <div>{this.state.currentTime}</div>
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
)