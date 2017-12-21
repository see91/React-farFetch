import React, {Component} from 'react';
import './index.less'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
export default class Description extends Component {
    constructor() {
        super();
        this.state = {show: false}
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }
    getMenuList = () => (
        <CSSTransition  classNames="fade" timeout={500}>
            <div className='get-list'>
                <p>{this.props.description}</p>
                <div className='sharing
'><i className='iconfont icon-tubiao215'></i> 分享
                </div>
                <p>Farfetch特定编码:<span> 117766135</span></p>
                <p>品牌特定编号:<span> MY1250</span></p>
            </div>
        </CSSTransition>

    )

    render() {
        return (
            <div className='descriptions'>
                <div className='description' onClick={this.handleClick}>
                    <span>商品描述</span>
                    <div className='icon'>
                        {this.state.show ? <i className='iconfont icon-news-more'></i> :
                            <i className='iconfont icon-iconjian'></i>}
                    </div>
                </div>
                <TransitionGroup>
                    {
                        !this.state.show && this.getMenuList()
                    }
                </TransitionGroup>
            </div>
        )
    }
}