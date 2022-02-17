import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
// importing store 
import store from './app/store';
import 'antd/dist/antd.css';

// ! root is the id in index.html on which the entire App component will latch on to and render all children components
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));