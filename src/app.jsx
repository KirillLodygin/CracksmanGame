import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/configureStore';
import Layout from './app/view/layouts/Layout';

var EventEmitter = require('events').EventEmitter;

window.ee = new EventEmitter();
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
       <Layout/>
    </Provider>,
app);