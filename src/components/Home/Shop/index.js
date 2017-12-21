import React, {Component} from 'react';
import MHeader from "../../../pubComponents/MHeader/index";
import './index.less'
import NavLink from "react-router-dom/es/NavLink";
import './index.less';
export default class Shop extends Component{
    render(){
        return (
          <div className="shopp">
            <div className="shop-header">
              <NavLink exact to='/'>
                <i className="iconfont icon-cuo"></i>
              </NavLink>
              <span>购物车</span>
            </div>
            <div className="my-shop">
              <div className="top">

              </div>
              <div className="middle">
                购物袋中暂无商品
              </div>
              <div className="bottom"></div>
              <NavLink exact to='/list'>
              <button>立即选购</button>
              </NavLink>
            </div>
          </div>

        )
    }
}
