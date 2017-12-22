import React, {Component} from 'react';
import './style/newaccount.less';
import {connect} from 'react-redux';
import actions from '../../store/action/session';
import Alert from '../../components/Alear/index';

class NewAccount extends Component {
    constructor() {
        super();
        this.state = {vCode: ''}
    }

    getVcode = (event) => {
        function getCode() {
            let vCode = '';
            for (var i = 0; i < 6; i++) {
                vCode += Math.round(Math.random() * (9 - 0) + 0);
            }
            return vCode
        }

        let phone = this.phone.value;
        let vCode = getCode();
        this.setState({vCode})

        function code() {
            var token = '7c7d6dd7398c2eb78eafa0c22bf61e94';
            var mobile = phone;
            var msg = '您的验证码为' + vCode;
            var country_code = '86';
            $.ajax({
                type: 'POST',
                url: 'http://www.api51.cn/api/smsApi/sendmsg',
                data: {
                    'mobile': mobile,
                    'msg': msg,
                    'country_code': country_code,
                    'token': token
                },
                dataType: "json",
                success: function (data) {
                    if (data.result == 0) {
                        alert('发送成功')
                    } else {
                        alert('发送失败')
                    }
                }
            });
        }

        code();

        event.target.innerText = '请稍后!';
    };

    handledet = () => {
        let phone = this.phone.value;
        let password = this.password.value;
        let vcode = this.vcode.value;
        if (vcode !== this.state.vCode) {
            alert('验证码错误,请重新输入!')
        } else {
            this.props.det({phone: parseInt(phone), password});
            setTimeout(() => {
                this.props.reg.success ? alert(this.props.reg.success) : alert(this.props.reg.error)
            }, 200)
        }
    };

    render() {
        return (
            <div className="lasts">
                <p className="NewA">创建新账户</p>
                <input ref={input => this.phone = input} className="Names" type="text" placeholder="联系方式*"/>
                <input ref={input => this.password = input} className="Safety" type="password" placeholder="密码*"/>
                <input ref={input => this.vcode = input} className="Verification" type="text" placeholder="验证码*"/>
                <button className="news" onClick={this.getVcode}>验证码</button>
                <span className="Information">我希望以电子报以及邮件形式获取有关的Farfetch最新的动态信息</span>
                <button onClick={this.handledet} className="determine">创建账户</button>
                <p className="statement">一旦注册即表示您同意遵守我们的条款与条件以及隐私政策</p>
                <button onClick={() => {
                    this.props.history.push("/login")
                }}
                        className="doubt">已创建新账户？
                </button>
                <Alert/>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(NewAccount)