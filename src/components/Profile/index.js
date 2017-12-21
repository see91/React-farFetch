import React, {Component} from 'react';
import './style/profile.less'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import actions from "../../store/action/session"

class Profile extends Component {
    handleLogout = () => {
        this.props.logout();
        setTimeout(() => {
            console.log(this.props.reg);
            this.props.reg.success ? alert(this.props.reg.success) : alert(this.props.reg.error)
        }, 200)
    };

    render() {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <div>
                        {
                            this.props.user ? <p>{this.props.user.username}</p> : <Link to="/login">登录</Link>
                        }
                    </div>
                    {
                        this.props.user && <div onClick={this.handleLogout}>退出</div>
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.success,
    actions,
)(Profile)