import React,{Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less';
export default class Shop extends Component{
    render(){
        return (
          <div>
            <div className="shop-header">
              <NavLink exact to='/'>
                <i className="iconfont icon-fanhui"></i>
              </NavLink>
              <span>购物车</span>
            </div>
            <div className="my-shop">
              <div className="top">

              </div>
              <div className="middle">
                购物袋中暂无商品
              </div>
              <div className="bottom">

              </div>
              <button>立即选购</button>
            </div>
          </div>

        )
    }
}