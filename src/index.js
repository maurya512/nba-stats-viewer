import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';

// ! root is the id in index.html on which the entire App component will latch on to and render all children components
ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));