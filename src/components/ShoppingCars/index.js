import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import './style/shopping.css'
export default class ShoppingCars extends Component {
    render() {
        return (
            <div id="shopping">
                <MHeader title={{title: '购物袋'}} back={true}/>
                <div className='shopcarContent'>
                    <ul>
                        <li className="one">
                            <h4>14天无理由免费退货(退款含税)</h4>
                            <p>还在犹豫？别担心，我们提供14天无理由年费退货。</p>
                            <span>来自中国内地的退货，您的退款将包含下单时所支付的关税。</span>
                        </li>
                        <li className="help">
                            <h3>需要帮助?</h3>
                            <p>请以如下方式联系我们的客服：</p>
                            <button className='iconfont icon-dianhua iphone'></button>
                            <button className='iconfont icon-youxiang email'></button>
                        </li>
                        <button className="Settle"
                                onClick={()=>{
                                    this. props.history.push("/settlement")
                                }}
                        >去结算</button>
                    </ul>
                </div>

            </div>
        )
    }
}
