import React,{Component} from 'react';
import boom from '../../../static/img/3.jpg'
import './index.less'
export default class BrandMan extends Component{
    render(){
        return (
            <div className="brand-nan">
                <h3>人气设计师品牌</h3>
                <ul>
                    <li>
                        <img src={boom}/>
                        <p>AMI AL </p>
                        <span>选购全部</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>选购全部</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>选购全部</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>选购全部</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>选购全部</span>
                    </li>
                    <li>
                        <img src={boom}/>
                        <p>CALVIN  </p>
                        <span>选购全部</span>
                    </li>
                </ul>
            </div>
        )
    }
}