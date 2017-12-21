import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import {connect} from 'react-redux'
import './style/shopping.css'

class ShoppingCars extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getShopcar({id: id})
    }

    render() {
        return (
            <div className="shopping">
                <MHeader title={{title: '购物袋'}} back={true}/>
                <div className='shopcarContent'>
                    <ul>
                        <li className="Billing">
                            <p className="Subtotal">小计:</p>
                            <p className="TotalBill">总计：</p>
                        </li>
                        <li className="Products">
                            <h5 className="Origins">一项商品产地来自美国</h5>
                            <p className="THOM">THOMBROWNE</p>
                            <p className="Numbering">:12423301</p>
                            <button className="number">数量1</button>
                            <p className="Join">☆加入愿望单</p>
                            <p className="unitPrice">¥5,200.00</p>
                        </li>
                        <li className="Products">
                            <h5 className="Origins">一项商品产地来自美国</h5>
                            <p className="THOM">THOMBROWNE</p>
                            <p className="Numbering">:12423301</p>
                            <button className="number">数量1</button>
                            <p className="Join">☆加入愿望单</p>
                            <p className="unitPrice">¥5,200.00</p>
                        </li>
                        <li className="Products">
                            <h5 className="Origins">一项商品产地来自美国</h5>
                            <p className="THOM">THOMBROWNE</p>
                            <p className="Numbering">:12423301</p>
                            <button className="number">数量1</button>
                            <p className="Join">☆加入愿望单</p>
                            <p className="unitPrice">¥5,200.00</p>
                        </li>
                        <li className="one">
                            <h4>14天无理由免费退货(退款含税)</h4>
                            <p>还在犹豫？别担心，我们提供14天无理由年费退货。</p>
                            <span>来自中国内地的退货，您的退款将包含下单时所支付的关税。</span>
                        </li>
                        <li className="help">
                            <h3>需要帮助?</h3>
                            <p>请以如下方式联系我们的客服:</p>
                            <button className='iconfont icon-dianhua iphone'></button>
                            <button className='iconfont icon-youxiang email'></button>
                        </li>
                        <button className="Settle"
                                onClick={() => {
                                    this.props.history.push("/settlement")
                                }}
                        >去结算
                        </button>
                    </ul>
                </div>
            </div>
        )
    }
}


export default connect(
    state => state.detail
)(ShoppingCars)