import React,{Component} from 'react';
import './style/harvest.css'
export default class Harvest extends Component{
    render(){
        return (
            <ul id="harvests">
                <li className="New">
                 <h3>新的收货地址</h3>
                </li>
                <li className="center">
                    <input type="text" placeholder="名字*"/>
                    <input type="text" placeholder="姓氏*"/>
                    <input type="text" placeholder="国家*"/>
                    <input type="text" placeholder="省/直辖市*"/>
                    <input type="text" placeholder="城市*"/>
                    <input type="text" placeholder="地址(第一行)*"/>
                    <input type="text" placeholder="邮编*"/>
                    <input type="text" placeholder="电话*"/>
                    <p>如果订单出现问题，我们将会以电话的形式联系你</p>
                    <p className="Bills">设定为账单地址</p>
                </li>
                <button className="save">保存并继续</button>
            </ul>
        )
    }
}