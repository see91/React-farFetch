import React,{Component} from 'react';
import boom from '../../../static/img/ck1.jpg'
import './index.less'
export default class HomeMain6 extends Component{
    render(){
        return (
          <div>
            <div className="love">您可能会喜欢... ...</div>
          <div className="home-main6">
            <div>CALVIN KLEIN 205W39NYC<h6>选购全部<a> ></a></h6></div>
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
            </ul>
          </div>
            <div className="home-main6">
              <div>AMI ALEXANDER MATTIUSSI<h6>选购全部<a> ></a></h6></div>
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
              </ul>
            </div>
            <div className="home-main6">
              <div>OFF-WHITE<h6>选购全部<a> ></a></h6></div>
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
              </ul>
            </div>
          </div>
        )
    }
}