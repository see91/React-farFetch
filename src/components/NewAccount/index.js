import React,{Component} from 'react';
import './style/newaccount.less'
import {connect} from 'react-redux';
import actions from '../../store/action/session'
 class NewAccount extends Component{
    handledet=()=>{
        let phone=this.phone.value;
        let password=this.password.value;
        this.props.det({phone,password});
    };
    render(){
        return (
            <div className="lasts">
                    <p className="NewA">创建新账户</p>
                    <input ref={input=>this.phone=input} className="Names" type="text" placeholder="联系方式*"/>
                    <input ref={input=>this.password=input} className="Safety" type="text" placeholder="密码*"/>
                    <input className="Verification" type="text" placeholder="验证码*"/>
                    <button className="news">验证码</button>
                    <span className="Information">我希望以电子报以及邮件形式获取有关的Farfetch最新的动态信息</span>
                    <button onClick={this.handledet} className="determine">创建账户</button>
                    <p className="statement">一旦注册即表示您同意遵守我们的条款与条件以及隐私政策</p>
                    <button onClick={()=>{
                        this.props.history.push("/login")
                    }}
                            className="doubt">已创建新账户？</button>
            </div>
        )
    }
}
export default connect(
   state=>state.session,
   actions
)(NewAccount)