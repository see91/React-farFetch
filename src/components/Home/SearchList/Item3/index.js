import React,{Component} from 'react';
import './index.less';
import NavLink from "react-router-dom/es/NavLink";
export default class Item3 extends Component{
  render(){
    return (
      <div className="it3">
        <div>
          <p>搜索畅销单品</p>
        </div>
          <NavLink exact to="/list">
        <ul>
          <li>Moncler Kid<span>></span></li>
          <li>Dolce & Gabbana Kids<span>></span></li>
          <li>Burberry Kid<span>></span></li>
          <li>Gucci Kid<span>></span></li>
          <li>Stella Mcaartney<span>></span></li>
        </ul>
          </NavLink>
      </div>
    )
  }
}