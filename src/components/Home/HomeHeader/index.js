import React,{Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import logo from '../../../static/img/logo.png'
import './index.less'
export default class HomeHeader extends Component{
    render(){
        return (
                <div className="home-header-db">
                    <div className="hhh">
                    <img src={logo} className="home-logo-db"/>
                    </div>
                    <div className="home-gouwu-db">
                            <NavLink exact to='/shop'>
                            <i className="iconfont icon-gouwu"></i>
                            </NavLink>
                    </div>

                </div>
        )
    }
}
