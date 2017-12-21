import {combineReducers} from 'redux'
import list from './list'
import home from './home'
import detail from './detail'
import brand from './brand'

let reducer = combineReducers({
    home, list, detail, brand
});

export default reducer