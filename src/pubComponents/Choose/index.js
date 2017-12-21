import React,{Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less';
import {connect} from 'react-redux'
import action from '../../store/action/home'

 class Choose extends Component{
   componentDidMount() {
this.props.reqChoose()
   }
    render(){
      return (
            <div className="home-main">
                <div>特别为您推荐的卫衣及针织衫
                  <NavLink exact to='/list'>
                  <h6>选购全部
                    <span> ></span>
                  </h6>
                  </NavLink>
                </div>
              <ul>
                <NavLink exact to="/list">
                {

                  this.props.home.choose.map((item,index)=>(
                    <li key={index}>
                      <img src={item.url}/>
                      <p>{item.title}</p>
                      <span>￥{item.price}</span>
                    </li>
                  ))
                }
                </NavLink>
              </ul>
            </div>
        )
    }
}
export default connect (
  state=>state,
  action
)(Choose)