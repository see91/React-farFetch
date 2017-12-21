import {combineReducers} from 'redux'
import home from './home'
import session from './session';
import {routerReducer} from 'react-router-redux'
let reducer = combineReducers({
    home,session,
    router:routerReducer
});

export default reducer