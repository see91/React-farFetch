import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from "../../store/action/session"
import Alert from '../../components/Alear/index'
import MHeader from "../../pubComponents/MHeader/index";

class Login extends Component {
    login = () => {
        let userInfo = {
            phone: this.phone.value,
            password: this.password.value
        };
        this.props.login(userInfo);
        setTimeout(() => {
            this.props.session.login.success ? alert(this.props.session.login.success) : alert(this.props.session.login.error)
        }, 200)
    };

    render() {
        return (
            <div>
                <MHeader title={{title: '登录'}} back={true}/>
                <div className="content">
                    <div className="title">
                        <input ref={input => this.phone = input} className="address" type="text" placeholder="手机号"
                               required/>
                        <input ref={input => this.password = input} className="encryption" type="password"
                               placeholder="密码"/>
                        <button type="submit" className="log" onClick={this.login}>登录</button>
                        <p className="forget">忘记密码？</p>
                        <button
                            onClick={() => {
                                this.props.history.push("/newAccount")
                            }}
                            className="Create">创建新账户
                        </button>
                        <Alert/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state,
    actions,
)
(Login)
