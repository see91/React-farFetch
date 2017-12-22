import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
export default class Submit extends Component {
    constructor() {
        super();
        this.state = ({show: false})
    }

    handleSize = () => {
        this.setState({show: !this.state.show})
    }
    goBack = () => {
        this.setState({show: !this.state.show})
    }
    getMenuList = () => (
        <div className='add-bags'>
            <div className='bags-close'>

                <i className='iconfont icon-cuo bags-icon' onClick={this.goBack}></i>
                <Link to={{pathname:'/shoppingcars'}}><p className='bags-btn'>加入购物袋</p></Link>

            </div>
            <div className='bags-size'>
                <h5 className='mean-code'> 均码</h5>
                <div className='mean-last'>最后一件 <span className='mean-size'>M</span></div>
            </div>
            <h3 className='size-list'>显示尺码列表 <i className='iconfont icon-arrow-right'></i></h3>
        </div>
    )
    render() {
        return (
            <div className='submits'>
                <div className='submit' onClick={this.handleSize}>
                    加入购物袋
                </div>
                {
                    this.state.show ? this.getMenuList() : ""
                }
            </div>
        )
    }
}