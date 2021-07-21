import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
function plusone(cc, props){
  console.log(cc);
  return{count: cc.count + 1};
}

class AddByFunction extends React.Component {
  constructor(props){
      super(props);
      this.state = {count: 0};
      this.increment = this.increment.bind(this);
  }

  increment() {
      this.setState(plusone);
      this.setState(plusone);

  }

  render(){
      console.log('cc');
      return (
          <div>
              <button onClick={this.increment}>AddByFunction</button>
              <h2>Result:{this.state.count}</h2>
          </div>
      );
  }
}

ReactDOM.render(
  <AddByFunction />,
  document.getElementById('root')
);