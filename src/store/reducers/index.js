import {combineReducers,applyMiddleware,compose} from 'redux'
import list from './list'
import home from './home'
import session from './session';
import {routerReducer} from 'react-router-redux'
import detail from './detail'
let reducer = combineReducers({
    home,session,
    router:routerReducer,list, detail
});

export default reducer