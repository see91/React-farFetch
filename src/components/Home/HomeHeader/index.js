import React,{Component} from 'react';
import logo from '../../../static/img/logo.png'
import './index.less'
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {flag:true}
    }
    handleClick= ()=>{
        this.setState({
            flag: !this.state.flag
        })
    }
    render(){
        return (
                <div className="home-header">
                    <img src={logo} className="home-logo"/>
                    <div className="home-gouwu" onClick={this.handleClick}>
                        {
                            this.state.flag?<i className="iconfont icon-gouwu"></i>:''

                        }

                    </div>
                </div>
        )
    }
}
