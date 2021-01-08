import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterApp from './CounterApp';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
      <CounterApp value={4}/>
  </React.StrictMode>,
  document.getElementById('root')
);


