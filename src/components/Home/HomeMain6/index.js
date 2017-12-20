import React,{Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'
import {connect} from 'react-redux'
import action from '../../../store/action/home'
class HomeMain6 extends Component{
  componentDidMount() {
    this.props.reqList1();
    this.props.reqList2();
    this.props.reqList3();
  }
    render(){
        return (
          <div>
            <div className="love">您可能会喜欢... ...</div>
          <div className="home-main6">
            <div>CALVIN KLEIN 205W39NYC
              <NavLink exact to="/list">
              <h6>选购全部<span> ></span></h6>
              </NavLink>
            </div>
            <ul>
              {
              this.props.home.list1.map((item,index)=>(
                <li key={index}>
                  <img src={item.url}/>
                  <p>{item.title}</p>
                  <span>{item.price}</span>
                </li>
              ))
              }
            </ul>
          </div>
            <div className="home-main6">
              <div>AMI ALEXANDER MATTIUSSI
                <NavLink exact to="/list">
                  <h6>选购全部<span> ></span></h6>
                </NavLink>
              </div>
              <ul>
                {
                  this.props.home.list2.map((item,index)=>(
                    <li key={index}>
                      <img src={item.url}/>
                      <p>{item.title}</p>
                      <span>{item.price}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="home-main6">
              <div>OFF-WHITE
                <NavLink exact to="/list">
                  <h6>选购全部<span> ></span></h6>
                </NavLink>
              </div>
              <ul>
                {
                  this.props.home.list3.map((item,index)=>(
                    <li key={index}>
                      <img src={item.url}/>
                      <p>{item.title}</p>
                      <span>{item.price}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        )
    }
}
export default connect (
  state=>state,
  action
)(HomeMain6)