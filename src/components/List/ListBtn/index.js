import React, {Component} from 'react';
import '../index.less'
import {connect} from 'react-redux'
import actions from '../../../store/action/list';

class ListBtn extends Component {
    constructor() {
        super();
        this.state = {isCollection: true}
    }

    collections = (event) => {
        event.preventDefault();
        event.target.star = !event.target.star;
        event.target.className = event.target.star ? 'iconfont icon-gray-star active' : 'iconfont icon-gray-star';
        this.setState({isCollection: !this.state.isCollection});
        let isCollection = this.state.isCollection;
        let id = this.props.id;
        this.props.getCollects({isCollection, id})
    };

    render() {

        return (
            <div>
                <div className='iconfont icon-gray-star ' onClick={this.collections}></div>
            </div>
        )
    }
}

export default connect(
    state => state.list,
    actions
)(ListBtn)