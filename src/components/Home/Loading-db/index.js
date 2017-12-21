import React,{Component} from 'react';
import './index.less'
export default class Loading extends Component{
    handleLoad(){
      window.setTimeout("window.location='/#/home'",3000);
    }
    render(){
        return (
            <div>
              <img src={require("../../../static/img/loading.png")} className="loading-db" onLoad={this.handleLoad}/>
            </div>
        )
    }
}