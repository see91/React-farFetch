import React,{Component} from 'react';
import './style/login.less';
export default class Login extends Component{
    render(){
        return (
            <div className="title">
                <p className="logs">登录</p>
                <input className="address" type="text" placeholder="电邮地址"/>
                <input className="encryption" type="password" placeholder="密码"/>
                <button className="log">登录</button>
                <p className="forget">忘记密码？</p>
                <button className="Create">创建新账户</button>
            </div>
        )
    }
}