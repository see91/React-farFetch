import React, {Component} from 'react';
import MHeader from "../../../pubComponents/MHeader/index";
import './index.less'

export default class Shop extends Component {
    render() {
        return (
            <div className="my-shop">
                <div className="top">

                </div>
                <div className="middle">
                    购物袋中暂无商品
                </div>
                <div className="bottom">

                </div>
                <button>立即选购</button>
            </div>
        )
    }
}