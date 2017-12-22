import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux'
import actions from '../../../store/action/list';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


class ListHeader extends Component {
    constructor() {
        super();
        this.state = {showList: false};
    }

    switchShow = () => {
        this.setState({showList: !this.state.showList});
    }

    changeType = (event) => {
        this.props.chooseList(event.target.dataset.type)
        this.switchShow();
    }
    getMenuList = () => (
        <CSSTransition classNames="fade" timeout={1000}>
            <ul className="menu-list" onClick={this.changeType}>
                <li className={this.props.type == "" ? 'active' : ''} data-type="">商品分类</li>
                <li className={this.props.type == "skirt" ? 'active' : ''} data-type="skirt">裙子</li>
                <li className={this.props.type == "coat" ? 'active' : ''} data-type="coat">上衣</li>
                <li className={this.props.type == "pants" ? 'active' : ''} data-type="pants">裤子</li>
                <li className={this.props.type == "shoes" ? 'active' : ''} data-type="shoes">鞋子</li>
            </ul>
        </CSSTransition>
    )

    render() {
        return (
            <div className="btn">
                <p>商品列表</p>
                <button onClick={this.switchShow}>筛选</button>
                <TransitionGroup>
                    {
                        this.state.showList && this.getMenuList()
                    }
                </TransitionGroup>
            </div>
        )
    }
}

export default connect(
    state => state.list,
    actions
)(ListHeader)