import React,{Component} from 'react';
import './index.less';
import './animate.css';
export default class Loading1 extends Component{
    handleLoad(){
      window.setTimeout("window.location='/#/l'",5000);
    }
    render(){
        return (
          <div className="my-lll">
            <div>
              <img src={require("../../../static/img/white.jpg")} className="loading-db1"/>
            </div>
            <div>
              <img src={require("../../../static/img/llll.png")}
              className="loading-db2 animated fadeInUp"
                   onLoad={this.handleLoad}
              />
            </div>
            <div>
              <img src={require("../../../static/img/love.gif")}
                   className="loading-db4 animated-db fadeIn"
              />
              <img src={require("../../../static/img/s.png")}
                   className="loading-db3 animated-db fadeIn"
              />
            </div>
          </div>
        )
    }
}