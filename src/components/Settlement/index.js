import React,{Component} from 'react';
import './style/settlement.css'
export default class Settlement extends Component{
    render(){
        return (
            <ul id="settlements">
                <li className="first">
                    <span>结算</span>
                </li>
                <li className="two"
                    onClick={()=>{
                        this. props.history.push("/harvest")
                    }}
                >
                    <span>配送</span>
                    选择收获地址
                    <i>&gt;</i>
                </li>
                <li className="three">
                    <span>配送</span>
                    选择配送方式
                </li>
                <li className="four">
                    <span>支付</span>
                    选择支付方式
                </li>
                <li className="fiver">
                    <input type="text" placeholder="优惠码*"/>
                    <button>确定</button>
                </li>
                <li>

                </li>
                <button className="Order">
                   确认下单
                </button>
            </ul>
        )
    }
}