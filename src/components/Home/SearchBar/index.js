import React,{Component} from 'react';
import './index.less';
import fangda from '../../../static/img/fangda.png'
export default class SearchBar extends Component{
    render(){
        return (
            <div className="home-search">
                <img src={fangda}/>
                <input type="text" placeholder="搜索"/>
            </div>
        )
    }
}