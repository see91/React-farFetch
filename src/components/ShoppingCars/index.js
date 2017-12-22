import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import {connect} from 'react-redux';
import './style/shopping.css';

class ShoppingCars extends Component {
    render() {
        let praList = this.props.prdList;
        return (
            <div className="shopping">
                <MHeader title={{title: '购物袋'}} back={true}/>
                <div className='shopcarContent'>

                </div>
                <ul className="Synthesis">
                    <li className="one">
                        <p className="Code">名称：{praList.title}</p>
                        <p className="Quote">价格：{praList.price}</p>
                        <img className="Addresss" src={praList.url}/>
                    </li>
                    <li className="Aftermarket">
                        <h4 className="FREE">14天无理由免费退货(退款含税)</h4>
                        <p className="Hesitate">还在犹豫？别担心，我们提供14天无理由年费退货。</p>
                        <span className="Returns">来自中国内地的退货，您的退款将包含下单时所支付的关税。</span>
                    </li>
                    <li className="help">
                        <h3 className="need">需要帮助?</h3>
                        <p className="Customer">请以如下方式联系我们的客服:</p>
                    </li>
                    <li className="perfect">
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
        )
    }
}

export default connect(
    state => state.detail
)(ShoppingCars)