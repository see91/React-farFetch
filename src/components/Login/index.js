import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from "../../store/action/session"

class Login extends Component {
    login = () => {
        let userInfo = {
            phone: this.phone.value,
            password: this.password.value
        };
        this.props.login(userInfo)
    };

    render() {
        return (
            <div className="title">
                <p className="logs">登录</p>
                <input ref={input => this.phone = input} className="address" type="text" placeholder="手机号" required/>
                <input ref={input => this.password = input} className="encryption" type="password" placeholder="密码"/>
                <button type="submit" className="log" onClick={this.login}>登录</button>
                <p className="forget">忘记密码？</p>
                <button
                    onClick={() => {
                        this.props.history.push("/newAccount")
                    }}
                    className="Create">创建新账户
                </button>
            </div>
        )
    }
}

export default connect(
    state => state,
    actions,
)(Login)
