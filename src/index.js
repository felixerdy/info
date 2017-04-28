import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';

ReactDOM.render(
  <App link={[
  { rel: 'stylesheet', href: '//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css' }
]}/>,
  document.getElementById('root')
);
