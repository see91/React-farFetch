import React,{Component} from 'react';
import './index.less';
import apple from '../../../static/img/apple.png'
import white from '../../../static/img/white.jpg'
import fangda from '../../../static/img/fangda.png';
import kok from '../../../static/img/kok.png';
import NavLink from "react-router-dom/es/NavLink";



export default class SearchList extends Component{
  constructor(){
    super();
    this.state={flag:false}
  }
  handleFocus = ()=>{
      this.setState({flag:!this.state.flag})
  }
  handleBlur = ()=>{
      this.setState({flag:!this.state.flag})
  }
    render(){
        return (
            <div className="searchH">
              <div className="search-top">
                <form>
                  <img src={fangda}/>
                  <img src={kok}/>
                <input type="text" placeholder="搜索设计师品牌、商品等" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                  <NavLink exact to="/">
                  <span>取消</span>
                  </NavLink>
                </form>
              </div>
              <div className="my-llist">

              </div>
              <div></div>
              {this.state.flag?
                <div className="apple">
                  <img src={apple}/>
                </div>:<div className="apple">
                <img src={white}/></div>
              }
            </div>
        )
    }
}