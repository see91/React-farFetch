import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'

import thunk from 'redux-thunk'
import promise from 'redux-promise'

import createHistory from 'history/createHashHistory';

let history = createHistory();
import {routerMiddleware} from 'react-router-redux';

let router = routerMiddleware(history);
//路由中间件

let store = applyMiddleware(router, thunk, promise)(createStore)(reducers);

window.store = store;
export default store;