import React,{Component} from 'react';
import './index.less';
import boom from '../../../../static/img/3.jpg'
export default class HomeMain1 extends Component{
    render(){
        return (
            <div className="home-main">
                <div>特别为您推荐的卫衣及针织衫<span>选购全部<a> ></a></span></div>
                <ul>
                    <li>
                        <img src={boom}/>
                        <p>AMI ALEXANDRE </p>
                        <span>￥1,797</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN KLENIN </p>
                        <span>￥3720</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN KLENIN </p>
                        <span>￥3720</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN KLENIN </p>
                        <span>￥3720</span>
                    </li>
                </ul>
            </div>
        )
    }
}