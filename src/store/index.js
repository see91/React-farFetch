import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

let store = applyMiddleware(thunk, promise, logger)(createStore)(reducers);

window.store = store;
export default store;