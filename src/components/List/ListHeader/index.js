import React, {Component} from 'react';
import './index.less';
export default class ListHeader extends Component {
    constructor() {
        super();
        this.state = {showList: false};
    }

    switchShow = () => {
        this.setState({showList: !this.state.showList});
    }

    changeType = (event)=>{
        let type = event.target.dataset.type;
        this.props.changeType(type);
        this.switchShow();
    }
    getMenuList = () => (
            <ul className="menu-list" onClick={this.changeType}>
                <li className={this.props.type == ""?'active':''} type="">商品分类</li>
                <li className={this.props.type == "skirt"?'active':''} type="skirt">裙子</li>
                <li className={this.props.type == "coat"?'active':''} type="coat">上衣</li>
                <li className={this.props.type == "pants"?'active':''} type="pants">裤子</li>
                <li className={this.props.type == "shoes"?'active':''} data-type="shoes">鞋子</li>
            </ul>
    )

    render() {
        return (

                <div className="btn">
                        <p>商品列表</p>
                        <button onClick={this.switchShow}>筛选</button>
                        {
                            this.state.showList && this.getMenuList()
                        }

                </div>


        )
    }
}