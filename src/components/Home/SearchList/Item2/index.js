import React,{Component} from 'react';
import './index.less';
import NavLink from "react-router-dom/es/NavLink";

export default class Item2 extends Component{
  render(){
    return (
      <div className="it2">
        <div>
          <p>搜索畅销单品</p>
        </div>
          <NavLink exact to="/list">
        <ul>
          <li>Givenchy<span>></span></li>
          <li>Off-White<span>></span></li>
          <li>Gucci<span>></span></li>
          <li>Saint Laurent<span>></span></li>
          <li>Moncler<span>></span></li>
        </ul>
          </NavLink>
      </div>
    )
  }
}