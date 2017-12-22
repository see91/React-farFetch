import React, {Component} from 'react';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/action/session';
class Alert extends Component {
    static defaultProps = {
        level: 'default'
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.clearMessages();
        },3000);
    }
    render() {
        if (this.props.success) {
            return (
                <div className="alert success">{this.props.success}</div>
            )
        } else if (this.props.error) {
            return (
                <div className="alert error">{this.props.error}</div>
            )
        } else {
            return null;
        }
    }
}
export default connect(
    state => state.session,
    actions
)(Alert);