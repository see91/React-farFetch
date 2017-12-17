import React,{Component} from 'react';
import boom from '../../../../static/img/3.jpg';
import './index.less'
export default class HomeMain4 extends Component{
    render(){
        return (
            <div className="home-main4">
                <div>特 别 为 您 推 荐<span>选购全部<a> ></a></span></div>
                <ul>
                    <li>
                        <img src={boom}/>
                        <p>AMI AL </p>
                        <span>￥1,797</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>￥3720</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>￥3720</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>￥3720</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>￥3720</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>￥3720</span>
                    </li>
                </ul>
            </div>
        )
    }
}