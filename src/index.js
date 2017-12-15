import React, {Component} from 'react';
import {render} from 'react-dom'
import './pubComponents/style/reset.css'
import './pubComponents/style/index.css'
import {Provider} from 'react-redux'
import store from './store'
import Routes from "./routes";


render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.querySelector('#root')
);
