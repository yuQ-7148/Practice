import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
async function fetchText() {
  let response = await fetch('/readme.txt');
  if (response.status >= 200 && response.status < 300) {
    return await response.text();
  } else {
    throw new Error(response.statusText);
  }
}

ReactDOM.render(
  document.getElementById('content')
)