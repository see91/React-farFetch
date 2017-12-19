import React,{Component} from 'react';
import yaodai from '../../../../static/img/ck1.jpg'
import './index.less'
export default class HomeMain3 extends Component{
    render(){
        return (
            <div className="shop">
                <img src={yaodai}/>
                <div className="my-new">
                    <h3>您 的 新 品 推 荐</h3>
                    <p>为您精挑细选的Calvin、</p>
                    <p>Klein 205W39nyc</p>
                    <p>Ami Alexandre</p>
                    <p>Mattiussi和Off-White</p>
                    <p>上架新品</p>
                    <button>选购全部</button>
                </div>

            </div>
        )
    }
}