import {combineReducers} from 'redux'
import list from './list'
import home from './home'

let reducer = combineReducers({
    home,list
});

export default reducer