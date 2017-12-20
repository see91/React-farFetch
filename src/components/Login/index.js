import React,{Component} from 'react';
import './style/login.less';
import {connect} from 'react-redux';
import actions from "../../store/action/session"
 class Login extends Component{
    handleClick=()=>{
        let username=this.username.value;
        let password=this.password.value;
        this.props.login({username,password})
    };
    render(){
        return (
            <div className="title">
                <p className="logs">登录</p>
                <input ref={input=>this.username=input} className="address" type="text" placeholder="电邮地址"/>
                <input ref={input=>this.password=input} className="encryption" type="password" placeholder="密码"/>
                <button onClick={this.handleClick}
                        className="log">登录</button>
                <p className="forget">忘记密码？</p>
                <button
                    onClick={()=>{
                     this.props.history.push("/newAccount")
                    }}
                    className="Create">创建新账户</button>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions,
)(Login)