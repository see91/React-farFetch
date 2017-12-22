import React,{Component} from 'react';
import './index.less'
export default class Loading1 extends Component{
    handleLoad(){
      window.setTimeout("window.location='/#/l'",3000);
    }
    render(){
        return (
            <div>
              <img src={require("../../../static/img/lo1.jpg")} className="loading-db1" onLoad={this.handleLoad}/>
            </div>
        )
    }
}