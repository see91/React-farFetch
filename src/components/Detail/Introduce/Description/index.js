import React, {Component} from 'react';
import './index.less'

export default class Description extends Component {
    constructor() {
        super();
        this.state = {show: false}
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }
    getMenuList = () => (
        <div className='get-list'>
            <p>{this.props.description}</p>
            <div className='sharing
'><i className='iconfont icon-tubiao215'></i> 分享
            </div>
            <p>Farfetch特定编码:<span> 117766135</span></p>
            <p>品牌特定编号:<span> MY1250</span></p>
        </div>
    )

    render() {
        return (
            <div className='descriptions'>
                <div className='description' onClick={this.handleClick}>
                    <span>商品描述</span>
                    <div className='icon'>
                        {this.state.show ? <i className='iconfont icon-news-more'></i> :
                            <i className='iconfont icon-jianhao'></i>}
                    </div>
                </div>
                <div>
                    {
                        !this.state.show && this.getMenuList()
                    }
                </div>
            </div>
        )
    }
}