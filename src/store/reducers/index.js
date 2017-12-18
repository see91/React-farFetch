import {combineReducers} from 'redux'
import list from './list'
import home from './home'
import detail from './detail'

let reducer = combineReducers({
    home, list, detail
});

export default reducer