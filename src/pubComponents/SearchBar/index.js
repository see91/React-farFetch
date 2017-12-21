import React,{Component} from 'react';
import './index.less';
import NavLink from "react-router-dom/es/NavLink";
import fangda from '../../static/img/fangda.png'
export default class SearchBar extends Component{
    render(){
        return (
            <div className="my-my">
            <div className="home-search">
                <img src={fangda}/>
                <NavLink exact to="/search/item2">
                <input type="text" placeholder="搜索"/>
                </NavLink>
            </div>
            </div>
        )
    }
}