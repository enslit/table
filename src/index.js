import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import './index.scss';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
