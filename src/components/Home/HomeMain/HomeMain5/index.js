import React,{Component} from 'react';
import boom from '../../../../static/img/3.jpg';
import './index.less'
export default class HomeMain5 extends Component{
    render(){
        return (
            <div>
                <div className="home-main5">
                    <div className="nin">您可能会喜欢... ...</div>
                    <ul>
                        <li>
                            <img src={boom}/>
                            <p>AMI ALE </p>
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
                    </ul>
                    <div className="hao">
                        <button>选购全部</button>
                    </div>
                </div>
                <div className="home-main5">
                    <div className="nin">您可能会喜欢... ...</div>
                    <ul>
                        <li>
                            <img src={boom}/>
                            <p>AMI ALE </p>
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
                    </ul>
                    <div className="hao">
                        <button>选购全部</button>
                    </div>
                </div>
            <div className="home-main5">
                <div className="nin">您可能会喜欢... ...</div>
                <ul>
                    <li>
                        <img src={boom}/>
                        <p>AMI ALE </p>
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
                </ul>
                <div className="hao">
                    <button>选购全部</button>
                </div>
            </div>
            </div>
        )
    }
}