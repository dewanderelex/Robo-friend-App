import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App abc = "abc"/>, document.getElementById('root'));
registerServiceWorker();
