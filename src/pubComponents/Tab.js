import React, {Component} from 'react';
import './style/tab.css'

export default class Tab extends Component {
    render() {
        return (
            <ul className="footer">
                <li className="Option">
                    <i className="iconfont icon-F"></i>
                    <span>首页</span>
                </li>
                <li>
                    <i className="iconfont icon-goubianyipinpaitemai"></i>
                    <span>品牌</span>
                </li>
                <li>
                    <i className="iconfont icon-xing"></i>
                    <span>愿望单</span>
                </li>
                <li>
                    <i className="iconfont icon-wode"></i>
                    <span>我的账户</span>
                </li>
            </ul>
        )
    }
}