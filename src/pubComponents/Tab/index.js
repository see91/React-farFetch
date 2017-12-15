import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";

export default class Tab extends Component {
    render() {
        return (
            <ul className="footer">
                <li className="Option">
                    <NavLink exact to='/'>
                        <i className="iconfont icon-F"></i>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/brand">
                        <i className="iconfont icon-pinpai"></i>
                        <span>品牌</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wishList">
                        <i className="iconfont icon-gray-star"></i>
                        <span>愿望单</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <i className="iconfont icon-wode"></i>
                        <span className="bla">我的账户</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}
