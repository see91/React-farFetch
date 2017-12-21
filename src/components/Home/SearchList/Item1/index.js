import React,{Component} from 'react';
import './index.less';
import NavLink from "react-router-dom/es/NavLink";

export default class Item1 extends Component{
    render(){
        return (
            <div className="it1">
              <div>
                <p>搜索畅销单品</p>
              </div>
              <NavLink exact to="/list">
              <ul>
                  <li>Saint Laurent<span>></span></li>
                  <li>Valentino<span>></span></li>
                  <li>Gucci<span>></span></li>
                  <li>Dolce & Gabbana<span>></span></li>
                  <li>Givenchy<span>></span></li>
              </ul>
              </NavLink>
            </div>
        )
    }
}