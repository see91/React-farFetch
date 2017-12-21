import React,{Component} from 'react';
import './index.less';
import apple from '../../../static/img/apple.png'
import hui from '../../../static/img/hui.png'
import fangda from '../../../static/img/fangda.png';
import kok from '../../../static/img/kok.png';
import NavLink from "react-router-dom/es/NavLink";

export default class SearchList extends Component{
  constructor(){
    super();
    this.state={flag:false,word:''}
  }
  handleFocus = ()=>{
      this.setState({flag:true})
  }
  handleBlur = ()=>{
      this.setState({flag:false})
  }
    render(){
        return (
            <div className="searchH">
              <div className="search-top">
                <form>
                  <img src={fangda}/>
                  <img src={kok}/>
                <input type="text" placeholder="搜索设计师品牌、商品等" onFocus={this.handleFocus} onBlur={this.handleBlur} autoFocus="autofocus"/>
                  <NavLink exact to="/home">
                  <span>取消</span>
                  </NavLink>
                </form>
              </div>
              <div className="my-llist">
                <p>
                  <NavLink to="/search/item1">女士</NavLink>
                  <NavLink to="/search/item2">男士</NavLink>
                  <NavLink to="/search/item3">儿童</NavLink>
                </p>
              </div>
              <div></div>
              {this.state.flag?
                <div className="apple">
                  <img src={apple}/>
                </div>:<div className="apple">
                <img src={hui}/></div>
              }
            </div>
        )
    }
}